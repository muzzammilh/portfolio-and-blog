import Image from 'next/image';

import Btn from '@components/btn';
import heroImage from '../images/undraw_Coding_re_iv62.png';

export default function Hero() {
  return (
    <>
      <Image src={heroImage} alt="Author Sketch" />
      <div className="text-center font-bold text-4xl sm:text-6xl">
        Muzzammil Hussain
      </div>
      <div className="text-center text-2xl  xl sm:text-3xl">
        I make software that grow business
      </div>
      <div className="text-center mt-3">
        <Btn text="Learn More" link="/about" />
      </div>
    </>

  );
}
