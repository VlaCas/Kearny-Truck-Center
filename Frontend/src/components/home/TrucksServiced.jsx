import image5 from '../../assets/images/image-5.jpg';

export default function TrucksServiced() {
  return (
    <>
      <div className="h-full md:w-1/2 md:h-[650px] md:bg-center md:bg-cover" style={{backgroundImage: `url(${image5})`}}>
        <img src={image5} alt="Truck Image" className='w-full h-auto md:hidden' />
      </div>
      <div className="flex flex-col justify-between px-4 py-8 xm:w-full md:w-1/2">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center after:w-20 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 md:text-4xl xl:text-5xl">Trucks Serviced</h2>
          <p className=" text-center mt-9 open-sans leading-7 xs:max-w-[560px] md:px-14 lg:text-lg  ">We provide top notch maintenance service for all types of Trucks. <br /> We are certified to service and repair the following makes:</p>
        </div>
        <div className="flex flex-wrap justify-start w-auto gap-6 mx-auto mt-8 xm:flex-nowrap xm:justify-center xl:w-full">
          <div className="w-2/5 xm:w-1/4">
            <ul className="">
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Freightliner</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Kenworth</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Peterbilt</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Mack</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">International Trucks</li>
            </ul>
          </div>
          <div className="w-2/5 xm:w-1/4">
            <ul className="">
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Volvo</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Western Star</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Sterling</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Autocar</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Hino</li>
            </ul>
          </div>
          <div className="w-2/5 xm:w-1/4">
            <ul className="">
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Isuzu</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Ford</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">GMC</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Ram</li>
              <li className="font-bold py-px open-sans text-sm leading-6 pl-[30px] ml-6 before:pr-4 before:-ml-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8">Chevrolet  Trucks</li>
            </ul>
          </div>
				</div>
        <div className='flex justify-center'>
          <button className="bg-[#C9534F] py-4 px-6 rounded-full transition-all lg:hover:bg-[#892d2a] open-sans text-white mt-12">
              <a href="about-us" className="font-semibold open-sans">VIEW FULL LIST</a>
          </button>
        </div>
      </div>
    </>
  )
};