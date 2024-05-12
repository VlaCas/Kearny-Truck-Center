import Label from '../components/Label';
import Nav from '../components/Nav';
import WhereWeAre from '../components/home/WhereWeAre';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import MakeContact from '../components/MakeContact';
import Carousel from '../components/home/Carousel.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TrucksServiced from '../components/home/TrucksServiced';
import TrucksRepairServices from '../components/home/TrucksRepairServices';

export default function Home() {
  return (
    <div className=' bg-[#fff] max-w-[1950px] m-auto overflow-x-hidden relative'>
      <Label />
      <Nav />
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