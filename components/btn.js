import Link from 'next/link';

export default function Btn(props) {
  return (
    <>
      <Link href={props.link} passHref>
        <a>
          <button className="px-4 py-2 bg-gray-700 rounded text-gray-100 hover:bg-red-400">
            {props.text}
          </button>
        </a>
      </Link>
    </>
  );
}
