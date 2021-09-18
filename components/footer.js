import Link from 'next/link';

import Btn from '@components/btn';
export default function Footer() {
  return (
    <footer>
      <div className="flex mt-4 justify-center items-center flex-col">
        <div className="col-auto">
          Designed and Developed by <Btn text="Muzzammil Hussain" link="/about" />
        </div>
        {/* <div className="col-auto font-bold mt-5">
          Credits
        </div>
        <div className="col-auto">
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">React.js</a>
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">Next.js</a>
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">Tailwindcss</a>
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">Vercel</a>
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">UnDraw</a>
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">React.js</a>
          <a href="#" className="text-gray-500 hover:text-gray-800 pr-2" target="_blank" rel="dofollow">React.js</a>
        </div> */}
        {/* <div className="mt-4 text-center">
          You can view the complete source code of the website on github
        </div> */}
        {/* <h3 className="text-5xl font-bold pb-4">Get in Touch</h3>
        <div className="box w-1/2 mx-auto py-8 border-solid border-4 rounded-lg sm:w-10/12">
          <p className="font-bold text-2xl pb-16 sm:pb-8">
            Want to work together or have any questions?
          </p>
        </div>

        <div className="my-4">
          <a href="#" target="_blank" rel="noreferrer" className="px-3">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="px-3">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="px-3">
            Resume
          </a>
        </div>
        <p className="col-end-3">
          Designed and Developed by
          <span className="bg-gray-200 p-2 ml-2 rounded-sm">
            Muzzammil Hussain
          </span>
        </p> */}
      </div>
    </footer>
  );
}
