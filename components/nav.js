import Link from 'next/link';
import { useRouter } from 'next/router';

import Menu from '@components/menu';

export default function Nav() {

  const router = useRouter();

  return (
    <>
      <nav className="bg-white flex items-center mt-2 justify-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="flex items-center space-x-3">
                <Menu link='/' text='Home' />
                <Menu link='/projects' text='Projects' />
                <Menu link='/about' text='About' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
