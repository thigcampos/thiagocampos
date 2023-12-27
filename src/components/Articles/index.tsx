'use client';

import { useEffect, useState } from 'react';

import styles from './articles.module.css';

import Empty from '../Empty';
import PostCard from '../PostCard';
import { LanguageAttribute } from '@/types';
import { usePosts } from '@/hooks/usePosts';

export default function Articles({ language }: LanguageAttribute) {
  const posts = usePosts({ language: language });
  const [hydrated, setHydrated] = useState(false);
	
  useEffect(() => {
    setHydrated(true);
  }, []);

  function renderPosts() {
    if (posts.length === 0) {
      return <Empty language={language} />;
    }

    return posts.map((post, idx) => (
      <PostCard key={idx} {...post} />
    ));
  }

  if(!hydrated) {
    return null; 
  }

  return (
    <div className={styles.postsWrapper}>
      { renderPosts() }
    </div>
  );
}