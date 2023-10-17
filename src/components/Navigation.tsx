import Image from "next/image";
import {ReactNode} from "react";

const Navigation = (): ReactNode => {
  return (
    <nav className='sticky h-28 px-4 flex mx-auto w-full max-w-screen-xl items-center justify-between sm:px-6 md:px-6'>
      <Image
        alt='huddle logo'
        src='/assets/logo.svg'
        width={200}
        height={100}
        className='w-46 h-9 transition-all duration-300 hover:scale-105 sm:w-32 sm:h-6 md:w-44 md:h-8'
      />
      <button className='px-6 py-1 text-xs text-lightPink border-lightPink border-2 transition-all shadow-md font-semibold hover:shadow-none hover:scale-95 hover:text-pink hover:border-pink'>
        Try It Free
      </button>
    </nav>
  );
};

export default Navigation;
