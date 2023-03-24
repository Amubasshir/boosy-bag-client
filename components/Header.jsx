import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import Wrapper from './Wrapper';

import { BsCart } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`h[50px] sticky top-0 z-10 flex w-full items-center justify-between bg-white transition-transform duration-300 md:h-[80px] ${show}`}
    >
      <Wrapper className="flex h-[60px] items-center justify-between">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="brand-logo"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        <div
          className="
        flex items-center gap-2 text-black
        "
        >
          <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
            <IoMdHeartEmpty className="text-lg md:text-2xl" />
            <div
              className="
             absolute top-1 left-5 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-red-600 px-[2px] text-xs text-white md:left-7 md:h-[18px] md:min-w-[18px] md:px-1 md:text-sm
            "
            >
              17
            </div>
          </div>
          <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
            <BsCart className="text-lg md:text-2xl" />
            <div
              className="
             absolute top-1 left-5 flex h-[14px] min-w-[14px] items-center justify-center rounded-full bg-red-600 px-[2px] text-xs text-white md:left-7 md:h-[18px] md:min-w-[18px] md:px-1 md:text-sm
            "
            >
              7
            </div>
          </div>

          {/* <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
            {mobileMenu ? (
              <GrClose
                className=" text-base"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRIght
                className=" text-xl"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div> */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
