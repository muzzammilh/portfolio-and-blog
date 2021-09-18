import Image from 'next/image';
import Link from 'next/link';

import DefaultLayout from '@layouts/default';
import Heading from '@components/heading';

import profilePicture from '../images/profile_picture.webp';

import { getAllPosts } from '@api';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <Heading text={props.title} />
      <div className="flex flex-col mx-auto w-64 h-64 mt-5">
        <Image 
          src={profilePicture}
          alt='Profile picture of Muzzammil Hussain'
          className='object-cover mr-2 rounded-full'
        />
      </div>
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
