import Link from 'next/link';

import DefaultLayout from '@layouts/default';
import Hero from '@components/hero';

import { getAllPosts } from '@api';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <Hero />
      {/* <p>List of posts:</p>
      <ul>
        {props.posts.map(function (post, idx) {
          return (
            <li key={idx}>
              <Link href={'/posts/' + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Home',
      posts: getAllPosts()
    },
  };
}
