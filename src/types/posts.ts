import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
 
export type Frontmatter = {
  title: string;
  date: string;
};
 
export type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};