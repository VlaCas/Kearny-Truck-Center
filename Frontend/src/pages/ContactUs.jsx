import Label from '../components/Label';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import image from '../assets/images/image-10.jpg'
import ContactForm from '../components/contact-us/ContactForm';

export default function ContactUs() {
  return (
    <div className='bg-[#fff] max-w-[1950px] m-auto overflow-x-hidden relative'>
      <Label />
      <div className="relative bg-center bg-cover lg:h-screen lg:min-h-[800px] lg:max-h-[1200px] xl:min-h-[1000px]" style={{backgroundImage: `url(${image})`}}>
        <Nav />
        <ContactForm />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};