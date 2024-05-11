import React, { useEffect, useState } from 'react';
import Label from '../components/Label';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel.jsx';
import MakeContact from '../components/MakeContact';
import WhyChooseUs from '../components/WhyChooseUs';
import TrucksServiced from '../components/TrucksServiced';
import TrucksRepairServices from '../components/TrucksRepairServices';
import WhereWeAre from '../components/WhereWeAre';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' bg-[#fff] max-w-[1950px] m-auto overflow-x-hidden relative'>
      <Label scroll={isScrolled}/>
      <Nav scroll={isScrolled}/>
      <section id='wrapper-carousel' className='relative w-full h-screen bg-black'>
        <Carousel />
      </section>
      <section className='w-full action-section-to-contact max-h-52 bg-[#f1e6da] relative '>
        <MakeContact />
      </section>
      <section className='flex flex-col items-center w-full px-4 py-14 gap-9 md:max-w-[1170px] mx-auto'>
        <WhyChooseUs />
      </section>
      <section className='flex flex-col items-center w-full bg-[#f1e6da] md:flex-row md:gap-0 md:h-[650px]'>
        <TrucksServiced />
      </section>
      <section className='flex flex-col items-center w-full px-2.5 py-10 xl:py-14'>
        <TrucksRepairServices />
      </section>
      <section className='flex flex-col w-full py-10 bg-[#f1e6da] items-center xl:py-14'>
        <WhereWeAre />
      </section>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;