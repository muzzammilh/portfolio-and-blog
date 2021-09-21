import Image from 'next/image';
import Link from 'next/link';

export default function Publication(post) {

  const prettyDate = new Date(post.dateAdded).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      <div className="mt-10 mb-10 text-center">
        <div className="">{prettyDate}</div>
        <div className="text-xl sm:text-2xl mt-2 mb-2">{post.title}</div>
        <div className="text-center mt-5 mb-5">
          <Image
            src={post.coverImage}
            alt={post.title}
            height={300}
            width={600}
          />
        </div>
        <div>{post.brief}</div>
        <div className="mt-10 border-b-2 border-gray-200"></div>
      </div>
    </>
  );
}
