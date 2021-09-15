import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import remark from 'remark'; // TODO
import { html } from 'remark-html';
import { unified } from 'unified';
import { markdown } from 'remark-parse';
import { highlight } from 'remark-highlight.js';

export function getAllPosts() {
  // get the posts directory path
  const postsDirectory = path.join(process.cwd(), '_posts');

  // read all file names from the posts directory
  const filenames = fs.readdirSync(postsDirectory);

  // read files one by one
  return filenames.map((filename) => {
    const file = fs.readFileSync(
      path.join(process.cwd(), '_posts', filename),
      'utf8'
    );

    // get frontmatter
    const { data } = matter(file);

    // get slug from filename
    const slug = filename.replace(/\.md$/, '');

    // return combined frontmatter and slug; build permalink
    return {
      ...data,
      slug,
      permalink: `/posts/${slug}`,
    };

  });
}

export async function getPostBySlug(slug) {
  const file = fs.readFileSync(path.join(process.cwd(), '_posts', `${slug}.md`), 'utf8');

  const { content, data } = matter(file);

  // const body = remark().use(html).processSync(content).toString();
  const body = await unified().use(markdown).use(highlight).use(html).process(content);

  return {
    ...data,
    body,
  };
}

// export async function getAllPosts1() {
//   const context = require.context('../../posts', false, /\.md$/);
//   const posts = [];
//   for (const key of context.keys()) {
//     const post = key.slice(2);
//     console.log(post);
//     const content = await import(`../../posts/${post}`);
//     const meta = matter(content.default);
//     posts.push({
//       slug: post.replace('.md', ''),
//       title: meta.data.title,
//     });
//   }
//   return posts;
// }

// export async function getPostBySlug(slug) {
//   const fileContent = await import(`../../posts/${slug}.md`);
//   const meta = matter(fileContent.default);
//   const content = marked(meta.content);
//   return {
//     title: meta.data.title,
//     content: content,
//   };
// }
