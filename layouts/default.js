import Head from 'next/head';
import Header from '@components/header';
import Footer from '@components/footer';

export default function DefaultLayout(props) {
  return (
    <main>
      <div className="container mx-auto">
        <Head>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
        </Head>
        <Header />
          {props.children}
        <Footer />
      </div>
    </main>
  );
}
