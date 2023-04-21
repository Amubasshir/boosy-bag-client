import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

const HeroBanner = () => {
  return (
    <div className="hero-banner relative mx-auto w-full max-w-[1360px] text-lg text-white">
      <Carousel>
        <div>
          <img
            src="/slide-1.png"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          <div className="absolute bottom-6 left-0 cursor-pointer bg-white px-3 py-2 font-oswald text-base font-medium uppercase text-black hover:opacity-80 md:bottom-20 md:px-10 md:py-6 md:text-3xl">
            shop now
          </div>
        </div>
        <div>
          <img
            src="/slide-2.png"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          <div className="absolute bottom-6 left-0 cursor-pointer bg-white px-3 py-2 font-oswald text-base font-medium uppercase text-black hover:opacity-80 md:bottom-20 md:px-10 md:py-6 md:text-3xl"></div>
        </div>
        <div>
          <img
            src="/slide-3.png"
            className="aspect-[16/10] object-cover md:aspect-auto"
          />
          <div className="absolute bottom-6 left-0 cursor-pointer bg-white px-3 py-2 font-oswald text-base font-medium uppercase text-black hover:opacity-80 md:bottom-20 md:px-10 md:py-6 md:text-3xl"></div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
