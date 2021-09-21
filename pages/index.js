import Link from 'next/link';

import DefaultLayout from '@layouts/default';
import Hero from '@components/hero';
import Heading from '@components/heading';
import Publication from '@components/publication';

import { getAllPosts, getLatestPosts } from '@lib/api';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <Hero />
      <Heading text="Latest Publications" />
      {props.posts.map(function (post, idx) {
        return (
          <Publication {...post} key={idx} />
        );
      })}
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home',
      posts: await getLatestPosts()
    },
  };
}
