import Link from 'next/link';

import DefaultLayout from '@layouts/default';
import Heading from '@components/heading'; 

import { getAllPosts } from '@api';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <Heading text={props.title} />
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'About',
      posts: getAllPosts()
    },
  };
}
