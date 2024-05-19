import { useLocation } from 'react-router-dom';
import Label from '../components/Label';
import Nav from '../components/Nav';
import WhereWeAre from '../components/home/WhereWeAre';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import MakeContact from '../components/MakeContact';
import FirstSection from '../components/services/FirstSection';
import image11 from '../assets/images/image-11.jpg'
import ServicesSection from '../components/services/ServicesSection';
import { useEffect } from 'react';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }
  }, [location]);
  
  return (
    <div className=' bg-[#fff] max-w-[1950px] m-auto overflow-x-hidden relative' >
      <Label />
      <div className="relative bg-bottom bg-cover h-screen w-full min-h-[650px] lg:min-h-[800px] lg:max-h-[1200px] xl:min-h-[1000px]" style={{backgroundImage: `url(${image11})`}}>
        <Nav />
        <FirstSection />
      </div>
      <section className='w-full action-section-to-contact max-h-52 bg-[#f1e6da] relative '>
        <MakeContact />
      </section>
      <section className='w-full'>
        <ServicesSection />
      </section>
      <section className='flex flex-col w-full py-10 bg-[#f1e6da] items-center xl:py-14'>
        <WhereWeAre />
      </section>
      <Footer />
      <Copyright />
    </div>
  );
};