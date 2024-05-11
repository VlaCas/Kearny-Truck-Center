import Logo from '../assets/images/Kearny-truck-center-icon.ico';

export default function Label({ scroll }) {
  const mobileDevice = (window.innerWidth < 1024);
  const smartphoneDevice = (window.innerWidth <= 768);
  const smallDevice = (window.innerWidth <= 439);

  return (
    <nav className={`w-full h-[60px] bg-[#061A23] max-w-[1950px] fixed top-[-1px] ${(mobileDevice && !scroll) ? 'hidden' : ''} ${scroll ? 'z-20 border-b-2 border-b-[#C9534F]' : 'z-10'}`}>
      <div className='flex items-center justify-center gap-12 px-12 relative h-[60px] md:justify-between lg:justify-center'>
        <div className={`relative items-center ${smallDevice ? 'hidden' : 'flex'}`}>
          <img src={Logo} alt='Logo Moving Box' className={`relative w-20 left-[-0.5rem] md:top-[1.2rem] lg:top-[-15%] lg:absolute lg:left-[-7rem] lg:w-24 xl:left-[-9rem] xl:top-[-8%] ${scroll ? 'block' : 'hidden'} ${(smartphoneDevice) ? 'hidden' : 'block'}`} />
          <p className='text-[#C9534F] font-bold italic lg:text-xl xl:text-2xl'>Your Truck is our concern!</p>
        </div>
        <div className='flex items-center gap-6'>
          <a href="tel:+12013059763" className='text-[#C9534F] cursor-pointer hover:text-[#c9534fd3] lg:text-xl xl:text-2xl'> ☎ Call us at: (201) 305-9763 </a>
          <button className='border-2 border-[#C9534F] py-1 px-2 text-[#C9534F] text-xs rounded-full hover:bg-[#C9534F] hover:text-white transition-all sm:px-4 sm:py-0 sm:text-lg md:text-xl md:px-4 md:py-2'>
            <a href="">Get a Free Budget</a>
          </button>
        </div>
      </div>
    </nav>
  )
};