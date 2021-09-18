// import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Menu(props) {

  // const router = useRouter();


  return (
    <>
      <Link href={props.link} passHref>
        <a className="py-2 px-2 mb-1 text-gray-500 hover:text-gray-800 transition duration-300">
            {props.text}
        </a>
      </Link>
    </>
  );
}