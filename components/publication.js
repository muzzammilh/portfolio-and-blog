import Link from 'next/link';

export default function Publication(post) {
  return (
    <>
      <h1>Publication</h1>
      <p>{post.title}</p>
      <p>{post.dateAdded}</p>
    </>
  );
}
