import Head from 'next/head';
import Header from '@components/header';
import Footer from '@components/footer';

export default function DefaultLayout(props) {
  return (
    <main>
      <div className="container mx-auto max-w-4xl p-5 text-gray-800">
        <Head>
          <title>{props.title} - Muzzammil Hussain</title>
          <meta name="description" content={props.description} />
        </Head>
        <Header />
          {props.children}
        <Footer />
      </div>
    </main>
  );
}
