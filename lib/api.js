/*
  Reading for Markdown blogs
  https://betterprogramming.pub/build-your-personal-blog-with-next-js-and-strapi-e092bf11d3db
  https://css-tricks.com/building-a-blog-with-next-js/
  https://www.smashingmagazine.com/2021/06/creating-multi-author-blog-nextjs/
  https://dev.to/sagar/building-a-blog-with-next-js-253
  https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/lib/mdx.js
*/

/* 
  Hashnode integration 
  https://dev.to/codybontecou/post-to-dev-hashnode-and-medium-using-their-apis-54k4
  https://catalins.tech/hashnode-api-how-to-display-your-blog-articles-on-your-portfolio-page
*/

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import { gql } from '@apollo/client';
import apollo from '@lib/apolloClient';


const GET_LATEST_ARTICLES = gql`
{
  user(username: "yuricodesbot") {
    publication {
      posts(page: 0) {
        dateAdded
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;

export async function getLatestPosts() {
  const { data } = await apollo.query({
    query: GET_LATEST_ARTICLES,
  });

  // TODO: Error handling
  return data.user.publication.posts;
}

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const filenames = fs.readdirSync(postsDirectory).filter(function (x) {
    return x !== '.DS_Store';
  });

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
    if (data.type === 'post') {
      return {
        ...data,
        permalink: `/posts/${slug}`,
        slug,
      };
    } else {
      return {};
    }
  });
}

export function getPostBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), '_posts', `${slug}.md`),
    'utf8'
  );

  // const { content, data } = matter(file);

  // const body = remark().use(html).processSync(content).toString();

  const { content, data } = matter(file);
  const body = marked(content);
  return {
    ...data,
    body,
    slug,
  };
}
