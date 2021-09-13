import Head from 'next/head';
import Header from '@layouts/header';
import Footer from '@layouts/footer';

export default function DefaultLayout(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}
