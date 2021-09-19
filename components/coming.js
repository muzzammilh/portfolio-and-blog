import Image from 'next/image';

import Btn from './btn';
import comingSoonImage from '../images/undraw_stars_re_6je7.png';

export default function CommingSoon(props) {
  return (
    <>
      <div className="max-w-xl mx-auto">
        <Image src={comingSoonImage} alt="Coming Soon" />
      </div>
      <div className="text-center font-bold text-4xl sm:text-6xl">
      Coming Soon
      </div>
      <div className="text-center text-1xl  xl sm:text-2xl">
      You are a little early here, sorry
      </div>
      <div className="text-center mt-3">
        <Btn text="Go Home" link="/" />
      </div>
    </>
  );
}
