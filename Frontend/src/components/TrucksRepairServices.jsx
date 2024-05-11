import image6 from '../assets/images/image-6.jpg';
import image7 from '../assets/images/image-7.jpg';
import image8 from '../assets/images/image-8.jpg';

export default function TrucksRepairServices() {
  return (
    <>
      <h2 className='text-3xl text-center after:w-20 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 lg:text-4xl xl:text-5xl'>Auto Repair Services</h2>
      <p className='leading-7 text-center mt-9 open-sans max-w-80 xm:max-w-96 md:max-w-[700px] md:px-14 lg:text-lg xl:max-w-[800px]'>We offer a full range of garage services to truck owners located in New Jersey area.  <br /> Our professinals know how to handle a wide range of truck services.</p>
      <ul className='flex flex-wrap justify-center xm:justify-start xm:w-[462px] md:w-[750px] md:justify-center lg:w-[950px] xl:w-[1270px]'>
        <li className='mt-8 xm:w-[231px] md:w-[250px] lg:w-[316px] xl:w-[390px] '>
            <a href='services#engine-diagnostics' className='relative block h-[200px] w-[300px] bg-cover bg-center xm:w-[231px] xm:h-[154px] md:w-[250px] md:h-[166px] lg:w-[316px] lg:h-[220px] xl:w-[390px] xl:h-[260px] lg:hover:bg-opacity-50 lg:hover:cursor-pointer' style={{backgroundImage: `url(${image6})`}} >
              <span className='absolute w-full h-full bg-[rgba(255,255,255,0.0)] lg:hover:bg-[rgba(255,255,255,0.3)] transition-all'></span>
            </a>
            <h4 className='bg-[#f1e6da] py-2 px-4 xl:py-4 xl:px-6 hover:text-opacity-30'>  
              <a href='services#engine-diagnostics' className='flex items-center justify-between text-sm font-semibold open-sans xl:text-lg lg:hover:text-[rgba(0,0,0,0.3)] transition-all'>ENGINE DIAGNOSTICS<span className='text-2xl text-[#C9534F] float-right open-sans after:font-bold after:content-[">"] xl:text-4xl lg:hover:text-[rgba(201,83,79,0.59)] transition-all'></span></a>
            </h4>
				</li>
        <li className='mt-8 xm:w-[231px] md:w-[250px] lg:w-[316px] xl:w-[390px]'>
            <a href='services#lube-oil-filters' className='relative block h-[200px] w-[300px] bg-cover bg-center xm:w-[231px] xm:h-[154px] md:w-[250px] md:h-[166px] lg:w-[316px] lg:h-[220px] xl:w-[390px] xl:h-[260px] lg:hover:bg-opacity-20 lg:hover:cursor-pointer ' style={{backgroundImage: `url(${image7})`}} >
              <span className='absolute w-full h-full bg-[rgba(255,255,255,0.0)] lg:hover:bg-[rgba(255,255,255,0.3)] transition-all'></span>
            </a>
            <h4 className='bg-[#f1e6da] py-2 px-4 xl:py-4 xl:px-6'>  
              <a href='services#lube-oil-filters' className='flex items-center justify-between text-sm font-semibold open-sans xl:text-lg lg:hover:text-[rgba(0,0,0,0.3)] transition-all'>LUBE, OIL AND FILTERS <span className='text-2xl text-[#C9534F] float-right open-sans after:font-bold after:content-[">"] xl:text-4xl lg:hover:text-[rgba(201,83,79,0.59)] transition-all'></span></a>
            </h4>
				</li>
        <li className='mt-8 xm:w-[231px] md:w-[250px] lg:w-[316px] xl:w-[390px]'>
            <a href='services#belts-hoses' className='relative block h-[200px] w-[300px] bg-cover bg-center xm:w-[231px] xm:h-[154px] md:w-[250px] md:h-[166px] lg:w-[316px] lg:h-[220px] xl:w-[390px] xl:h-[260px] lg:hover:bg-opacity-20 lg:hover:cursor-pointer ' style={{backgroundImage: `url(${image8})`}} >
              <span className='absolute w-full h-full bg-[rgba(255,255,255,0.0)] lg:hover:bg-[rgba(255,255,255,0.3)] transition-all'></span>
            </a>
            <h4 className='bg-[#f1e6da] py-2 px-4 xl:py-4 xl:px-6'>  
              <a href='services#belts-hoses' className='flex items-center justify-between text-sm font-semibold open-sans xl:text-lg lg:hover:text-[rgba(0,0,0,0.3)] transition-all'>BELTS AND HOSES <span className='text-2xl text-[#C9534F] float-right open-sans after:font-bold after:content-[">"] xl:text-4xl lg:hover:text-[rgba(201,83,79,0.59)] transition-all'></span></a>
            </h4>
				</li>
      </ul>
      <div className='flex justify-center'>
        <button className='bg-[#C9534F] py-4 px-6 rounded-full transition-all lg:hover:bg-[#892d2a] open-sans text-white mt-12'>
          <a href='services' className='font-semibold open-sans'>VIEW ALL SERVICES</a>
        </button>
      </div>
    </>
  )
};