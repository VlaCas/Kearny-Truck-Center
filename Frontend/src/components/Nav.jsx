import { useState, useEffect } from 'react'
import Menu from './Menu.jsx';
import Logo from '../assets/images/Kearny-Truck-Center-Logo.ico';
import '../assets/styles/nav.css';

export default function Nav({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [equis, setEquis] = useState(false);
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

  const handleClick = () => {
    setIsOpen(!isOpen);
    setEquis(!equis);
  };
  return (
    <>
      <nav className={`flex items-center bg-transparent px-4 py-10 top-0 justify-between w-full max-w-[1950px] left-0 h-[70px] sm:py-12 sm:h-[90px] md:h-[108px] md:px-6 lg:py-0 lg:top-[59px] lg:justify-center lg:h-[90px] lg:bg-[rgba(6,26,35,0.55)] xl:px-3 xl:py-4 ${isScrolled ?'z-10' : 'z-20'} ${page === 'home' ? 'absolute' : 'relative'}`}>
        <img src={Logo} alt='Logo Moving Box' className='w-20 relative sm:w-24 lg:w-36 lg:top-[-35%] lg:left-[-25rem] xl:top-[-50%] xl:left-[-30rem]'/>
        <div className={`nav_items flex gap-4 absolute ${isOpen ? 'open' : ''}`}>
            <a href='/'>
                <Menu>Home</Menu>
            </a>
            <a href='about-us'>
                <Menu>About us</Menu>
            </a>
            <a href='services'>
                <Menu>Services</Menu>
            </a>
            <a href='contact-us'>
                <Menu>Contact us</Menu>
            </a>
        </div>
        <div className={`nav_toggle ${equis ? 'close' : ''}`} onClick={handleClick} >
            <span></span>
            <span></span>
            <span></span>
        </div>
      </nav>
    </>
  )
};