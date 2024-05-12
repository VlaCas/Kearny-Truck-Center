import Label from '../components/Label';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import image from '../assets/images/image-10.jpg'

export default function ContactUs() {
  return (
    <div className='bg-[#fff] max-w-[1950px] m-auto overflow-x-hidden relative'>
      <Label />
      <Nav />
      <div className="h-screen bg-center bg-cover" style={{backgroundImage: `url(${image})`}}></div>
      <Footer />
      <Copyright />
    </div>
  );
};