import Label from '../components/Label';
import Nav from '../components/Nav';
import WhereWeAre from '../components/home/WhereWeAre';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import MakeContact from '../components/MakeContact';
import TrucksRepairServices from '../components/home/TrucksRepairServices';
import FirstSectionAboutUs from '../components/about-us/FirstSectionAboutUs';
import image16 from '../assets/images/image-16.jpg'
import SecondSection from '../components/about-us/SecondSection';

export default function AboutUs() {
  return (
    <div className=' bg-[#fff] max-w-[1950px] m-auto overflow-x-hidden relative' >
      <Label />
      <div className="relative w-full h-screen bg-center bg-cover " style={{backgroundImage: `url(${image16})`}}>
        <Nav />
        <FirstSectionAboutUs />
      </div>
      <section className='w-full action-section-to-contact max-h-52 bg-[#f1e6da] relative '>
        <MakeContact />
      </section>
      <section className='flex flex-col items-center w-full md:flex-row md:gap-0 md:h-[650px]'>
        <SecondSection />
      </section>
      <section className='flex flex-col items-center w-full px-2.5 py-10 bg-[#f1e6da] xl:py-14'>
        <TrucksRepairServices H4BgColor={'bg-white'}/>
      </section>
      <section className='flex flex-col items-center w-full py-10 bg-white xl:py-14'>
        <WhereWeAre />
      </section>
      <Footer />
      <Copyright />
    </div>
  );
};