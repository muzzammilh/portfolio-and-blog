import Image from 'next/image';

import Btn from '@components/btn';
import heroImage from '@images/undraw_Coding_re_iv62.png';

export default function Hero() {
  return (
    <>
      <div className="mb-20">
        <div className="max-w-xl mx-auto">
          <Image src={heroImage} alt="Muzzammil Hussain" />
        </div>
        <div className="text-center text-1xl sm:text-2xl">
          Hello, my name is 
        </div>
        <div className="text-center font-bold text-4xl sm:text-6xl">
          Muzzammil Hussain
        </div>
        <div className="text-center text-1xl  xl sm:text-2xl">
          I make software that helps businesses grow
        </div>
        <div className="text-center mt-3">
          <Btn text="Learn More" link="/about" />
        </div>
      </div>
    </>
  );
}
