import DefaultLayout from '@layouts/default';
import CommingSoon from '@components/coming';

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <CommingSoon />
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Posts',
      // posts: getAllPosts()
    },
  };
}
