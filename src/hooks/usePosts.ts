import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { LanguageAttribute } from '@/types';

export function usePosts({ language }: LanguageAttribute) {
  const filteredContent = allPosts.filter((item) => item.language === language);
  return filteredContent.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}