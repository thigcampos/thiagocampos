'use client';

import styles from './articles.module.css';
import { useEffect, useState } from 'react';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import PostCard from '../PostCard';

export default function Articles() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const [hydrated, setHydrated] = useState(false);
	
  useEffect(() => {
    setHydrated(true);
  }, []);

  function renderPosts() {
    if (posts.length === 0) {
      // TODO: Create a componente for empty list
      return <p className={styles.warning}>Não há nenhum artigo por aqui... Tente utilizar o filtro <span>Todos</span></p>;
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