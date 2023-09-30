'use client';

import styles from './articles.module.css';
import { useState } from 'react';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from '..';
import { compareDesc } from 'date-fns';
import { tagOptions } from '@/constants/blog';
import Filter from '../Ionique/Filter';

export default function Articles() {
  const [filter, setFilter] = useState<string>('All');
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  
  function getStatus(selected: string) {
    setFilter(selected);
  }

  function filterPosts() {
    if (filter === 'All') {
      return posts;
    } 
    const filteredPosts = posts.filter((post) => post.tag === filter);
    return filteredPosts;
  }

  function renderPosts() {
    const filteredPosts = filterPosts();

    return filteredPosts.map((post, idx) => (
      <PostCard key={idx} {...post} />
    ));
  }
  return (
    <div>
      <div className={styles.filterWrapper}>
        <Filter callback={getStatus} options={tagOptions} defaultValue='All'/>
      </div>
      <div className={styles.postsWrapper}>
        { renderPosts() }
      </div>
    </div>
  );
}