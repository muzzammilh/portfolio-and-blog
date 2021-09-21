import DefaultLayout from '@layouts/default';
import CommingSoon from '@components/coming';

export default function Projects(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <CommingSoon />
    </DefaultLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Projects',
      // posts: getAllPosts()
    },
  };
}
