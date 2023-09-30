'use client';

import styles from './articles.module.css';
import { useEffect, useState } from 'react';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { filterPostOptions } from '@/constants/blog';
import { Filter } from '../Ionique';
import PostCard from '../PostCard';

export default function Articles() {
  const [filter, setFilter] = useState<string>(filterPostOptions[0]);
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const [hydrated, setHydrated] = useState(false);
	
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  function getStatus(selected: string) {
    if (selected.length > 0) setFilter(selected);
    else setFilter(filterPostOptions[0]);
  }

  function filterPosts() {
    if (filter === filterPostOptions[0]) {
      return posts;
    } 
    const filteredPosts = posts.filter((post) => post.tag === filter);
    return filteredPosts;
  }

  function renderPosts() {
    const filteredPosts = filterPosts();
    
    if (filteredPosts.length === 0) {
      // TODO: Create a componente for empty list
      return null;
    }

    return filteredPosts.map((post, idx) => (
      <PostCard key={idx} {...post} />
    ));
  }

  if(!hydrated) {
    return null; 
  }

  return (
    <div>
      <div className={styles.filterWrapper}>
        <Filter callback={getStatus} options={filterPostOptions} defaultValue='All'/>
      </div>
      <div className={styles.postsWrapper}>
        { renderPosts() }
      </div>
    </div>
  );
}