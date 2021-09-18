import Link from 'next/link';

export default function Logo() {
    return (
      <Link href="/" passHref>
        <a>
          <div className="flex items-center justify-center mt-5 text-7xl">M.</div>  
        </a>
      </Link> 
    );
  }
  