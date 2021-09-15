import { getAllPosts, getAuthorBySlug, getPostBySlug } from '@api';

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="post">
      <h1>{post.title}</h1>

      <time dateTime={post.createdAt}>{prettyDate}</time>

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post: {
        ...post
      },
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
