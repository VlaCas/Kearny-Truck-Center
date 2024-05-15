import { useEffect, useState } from 'react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import '../../assets/styles/carousel.css';
import image from '../../assets/images/Image.jpg';
import image2 from '../../assets/images/image-2.jpg';
import image3 from '../../assets/images/image-3.jpg';
import image4 from '../../assets/images/image-4.jpg';
import HexagonSvg from '../svg/Hexagon';
import MaintenanceSvg from '../svg/Maintenance';
import TrailerSvg from '../svg/Trailer';
import TireSvg from '../svg/Tire';
import QualitySvg from '../svg/Quality';

export default function Carousel() {
  const mobileDevice = window.innerWidth <= 1024;
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 500) {
        setDeviceType(150);
      } else if (width <= 640 && width > 500) {
        setDeviceType(300);
      } else if (width <= 768 && width > 640) {
        setDeviceType(450);
      } else if (width <= 1024 && width > 768) {
        setDeviceType(550);
      } else if (width <= 1280 && width > 1024) {
        setDeviceType(650);
      } else {
        setDeviceType(1000);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);
  
  const slides = [
    { image: image, h1: 'Expert Technicians, Competitive Prices', h2: 'We are committed to earning your trust by providing the expertise and value you expect.',
  svg: <MaintenanceSvg /> },
    { image: image2, h1: 'Exceptional Maintenance', h2: 'Rely on our expert care to keep your commercial trailers in top condition for every haul.',
  svg: <TrailerSvg /> },
    { image: image3, h1: 'Find the Tires that Match your needs', h2: 'Take advantage of our lowest prices that automatically include the best quality.',
  svg: <TireSvg /> },
    { image: image4, h1: 'Quality Products for Reliable Performance', h2: 'Equip your fleet with top-quality products for unrivaled reliability and performance on the road.',
  svg: <QualitySvg /> },
  ];

  return (
    <div id='carousel-wrapper' className='relative w-full h-full overflow-hidden'>
      <Swiper
        modules={[Navigation, Pagination, Parallax, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect='parallax'
        speed={1000}
        grabCursor
        loop
        parallax={true}
        pagination={{ clickable: true }}
        navigation={!mobileDevice}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='swiper-slide' style={{height: '100vh', minHeight: '800px'}}>
            <div className="slide-inner" style={{backgroundImage: `url(${slide.image})`}} data-swiper-parallax={deviceType} data-swiper-parallax-duration="" data-swiper-parallax-scale='1.20' data-swiper-parallax-opacity='0.25'></div>
            <div className="absolute h-[600px] -translate-x-1/2 -translate-y-1/2 w-[1000px] left-1/2 top-1/2">
              <div className={`flex flex-col items-center justify-center w-full h-full xs:gap-9 sm:gap-10 md:justify-evenly ${(window.innerWidth >= 1024 && window.innerHeight < 900) ? 'lg:justify-center lg:gap-5' : ''} ${(window.innerWidth >= 350 && window.innerHeight > 768) ? 'gap-12' : 'gap-4'}`}>
                <HexagonSvg>
                  {slide.svg}
                </HexagonSvg>
                <h1 className='text-xl text-center text-white px-[23rem] xs:text-2xl xs:px-[19rem] sm:text-3xl sm:px-0 md:text-4xl lg:text-5xl xl:text-6xl h1-carousel'>{slide.h1}</h1>
                <h2 className='font-sans text-xs font-normal text-center text-white px-[23rem] open-sans xs:text-xs xs:font-light xs:px-80 sm:text-sm sm:px-72 md:text-base md:px-56 lg:px-52 lg:text-lg xl:px-0 xl:text-xl h2-carousel'>{slide.h2}</h2>
                <button className='rounded-full font-normal text-white border-2 open-sans px-4 py-2 text-xs bg-[#061a23b9] hover:bg-[#061a23f3] transition-all xs:text-sm xs:py-3 xs:px-5 sm:text-base sm:py-3 sm:px-5 md:text-lg lg:py-4 lg:px-6 lg:text-xl xl:text-xl'>MORE INFORMATION</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};
