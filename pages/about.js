import Image from 'next/image';
import Link from 'next/link';

import DefaultLayout from '@layouts/default';
import Heading from '@components/heading';

import profilePicture from '../images/profile_picture.webp';

import { getPostBySlug } from '@api';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.post.title} description={props.post.description}>
      <Heading text={props.post.title} />
      <div className="flex flex-col mx-auto w-64 h-64 mt-10">
        <Image 
          src={profilePicture}
          alt='Profile picture of Muzzammil Hussain'
          className='object-cover mr-2 rounded-full'
        />
      </div>
      <div className="post prose max-w-none mt-10" dangerouslySetInnerHTML={{ __html: props.post.body }} />
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      post: getPostBySlug('about')
    },
  };
}
