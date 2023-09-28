"use client"

import { allPosts } from "contentlayer/generated";
import { PostCard } from "..";
import Select from "../Ionique/Select";
import { compareDesc } from "date-fns";
import styles from './listposts.module.css';
import { useState } from "react";
import { tagOptions } from "@/constants/blog";

export default function ListPosts() {
    const [filter, setFilter] = useState<Array<String>>([]);
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  
    async function getStatus(tag: string, status: boolean) {
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
        ))
    }
    return (
        <div>
          <div className={styles.filterWrapper}>
            <Select callback={getStatus}>Logs</Select>
            <Select callback={getStatus}>Sketch</Select>
          </div>
          <div className={styles.postsWrapper}>
            { renderPosts() }
          </div>
        </div>
    );
}