import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className="bg-black pt-14 pb-3 text-white">
      <Wrapper className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-24">
          <div className="flex shrink-0 flex-col gap-3">
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              Find a store
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium  text-white/50 hover:text-white">
              Become a partner
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium  text-white/50 hover:text-white">
              Sign up for email
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium  text-white/50 hover:text-white">
              Send us feedback
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium  text-white/50 hover:text-white">
              Student discount
            </div>
          </div>

          <div className="flex shrink-0 gap-12 md:gap-16 lg:gap-24">
            <div className="flex flex-col gap-3">
              <div className="font-oswald text-sm font-medium uppercase">
                get help
              </div>
              <div className="cursor-pointer text-sm text-white/50 hover:text-white">
                Order Status
              </div>
              <div className="cursor-pointer text-sm text-white/50 hover:text-white">
                Delivery
              </div>
              <div className="cursor-pointer text-sm text-white/50 hover:text-white">
                Returns
              </div>
              <div className="cursor-pointer text-sm text-white/50 hover:text-white">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-oswald text-sm font-medium uppercase">
                About nike
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                News
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Careers
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Investors
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Sustainability
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 md:justify-start">
          <Link
            href="https://www.facebook.com/mubasshir07/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://twitter.com/lastmubasshir"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mubasshirahmed7/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="https://github.com/Amubasshir"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </Wrapper>
      <Wrapper className="mt-10 flex flex-col justify-between gap-[10px] md:flex-row md:gap-0">
        <div className="cursor-pointer text-center text-[12px] text-white/[0.5] hover:text-white md:text-left">
          © 2023 Bossy Bags, Inc. All Rights Reserved
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
