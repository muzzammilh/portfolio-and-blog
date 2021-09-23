import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import DefaultLayout from '@layouts/default';
import Hero from '@components/hero';
import Heading from '@components/heading';
import Publication from '@components/publication';

import { getLatestPosts } from '@lib/api';

export default function Blog(props) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getLatestPosts().then( (response) => {
      setPosts(response);
    });
  });

  return (
    <DefaultLayout title={props.title} description={props.description}>
      <Hero />
      <Heading text="Latest Publications" />
      {posts.map(function (post, idx) {
        return (
          <Publication {...post} key={idx} />
        );
      })}
      <div className="text-center text-xl">
        <Link href="" passHref>
          <a>
            View all publications
          </a>
        </Link>
      </div>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
      // posts: await getLatestPosts()
    },
  };
}
