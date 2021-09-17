import DefaultLayout from '@layouts/default';
import Link from 'next/link';
import { getAllPosts } from '@api';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <p>List of posts:</p>
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
      </ul>
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts()
    },
  };
}
