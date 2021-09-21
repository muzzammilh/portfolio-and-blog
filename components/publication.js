import Image from 'next/image';
import Link from 'next/link';

import Btn from '@components/btn';

import { HASHNODE_BLOG_URL } from 'settings';

export default function Publication(post) {

  const postURL = HASHNODE_BLOG_URL + post.slug;
  const prettyDate = new Date(post.dateAdded).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      <div className="mt-10 mb-10 text-center bg-gray-50">
        <div className="mb-10 border-b-2 border-gray-200"></div>
        <div className="">{prettyDate}</div>
        <Link href={postURL} passHref>
          <a target="_blank">
            <div className="text-xl sm:text-2xl mt-2 mb-2">{post.title}</div>
          </a>
        </Link>
        <div className="text-center mt-5 mb-5">
          <Image
            src={post.coverImage}
            alt={post.title}
            height={300}
            width={600}
          />
        </div>
        <div>{post.brief}</div>
        <div className="mt-5 mb-5">
          <Btn text="Read More" link={postURL} />
        </div>
        <div className="mt-10 border-b-2 border-gray-200"></div>
      </div>
    </>
  );
}
