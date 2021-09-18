import Link from 'next/link';

import Btn from '@components/btn';
export default function Footer() {
  return (
    <footer>
      <div className="text-center bg-gray-200 border-3 p-10 mt-5">
        <div className="text-4xl font-bold">Let&apos;s talk</div>
        <div className="text-2xl mt-5">
          Would you like to work together or have any questions?
        </div>
        <div className="mt-5 space-x-5">
          <Btn text="LinkedIn" link="/about" />
          <Btn text="GitHub" link="/about" />
          {/* <Btn text="LinkedIn" link="/about" /> */}
        </div>
      </div>
      <div className="flex mt-4 justify-center items-center flex-col">
        <div className="col-auto">
          Designed and Developed by <span className="font-bold">Muzzammil Hussain</span>
        </div>
      </div>
    </footer>
  );
}
