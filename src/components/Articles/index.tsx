'use client';

import styles from './articles.module.css';
import { useState } from 'react';
import Select from '../Ionique/Select';
import { allPosts } from 'contentlayer/generated';
import { PostCard } from '..';
import { compareDesc } from 'date-fns';

export default function Articles() {
  const [filter, setFilter] = useState<Array<string>>([]);
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  
  function getStatus(tag: string, status: boolean) {
    let currentFilter = [...filter];
      
    if (currentFilter.includes(tag) && status === false) {
      currentFilter = currentFilter.filter((filtro) => filtro !== tag);
    } else currentFilter.push(tag);  
      
    setFilter(currentFilter);
  }

  function filterPosts() {
    if (filter.length === 0) {
      return posts;
    } 
    const filteredPosts = posts.filter((post) => filter.includes(post.tag));
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
        <Select callback={getStatus} type='Logs' />
        <Select callback={getStatus} type='Sketch' />
      </div>
      <div className={styles.postsWrapper}>
        { renderPosts() }
      </div>
    </div>
  );
}