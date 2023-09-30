import { tagOptions } from './src/constants/blog';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    date: { type: 'date', required: true },
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tag: { type: 'enum', options: tagOptions, required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: './src/posts', documentTypes: [Post] })