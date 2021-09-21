import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import { gql } from '@apollo/client';
import apollo from '@lib/apolloClient';


const GET_USER_ARTICLES = `
{
  user(username: "muzzammilz") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
      }
    }
  }
}
`;

export async function getLatestPosts() {
  const { data } = await apollo.query({
    query: gql`
    {
      user(username: "muzzammilz") {
        publication {
          posts(page: 0) {
            title
            brief
            slug
            contentMarkdown
          }
        }
      }
    }
    `,
  });

  return data.user.publication.posts;
}

export function getAllAuthors() {
  const authorsDirectory = path.join(process.cwd(), '_authors');
  const filenames = fs.readdirSync(authorsDirectory);

  return filenames.map((filename) => {
    const file = fs.readFileSync(
      path.join(process.cwd(), '_authors', filename),
      'utf8'
    );

    // get data
    const data = JSON.parse(file);

    // get slug from filename
    const slug = filename.replace(/\.json/, '');

    // return combined frontmatter and slug; build permalink
    return {
      ...data,
      permalink: `/authors/${slug}`,
      profilePictureUrl: `/${slug}.jpg`,
      slug,
    };
  });
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

export function getAuthorBySlug(slug) {
  const file = fs.readFileSync(
    path.join(process.cwd(), '_authors', `${slug}.json`),
    'utf8'
  );

  const data = JSON.parse(file);

  return {
    ...data,
    permalink: `/authors/${slug}`,
    profilePictureUrl: `/${slug}.jpg`,
    slug,
  };
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
