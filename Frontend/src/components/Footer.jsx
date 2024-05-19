import LocationSvg from "./svg/Location"
import TelephoneSvg from "./svg/Telephone"

export default function Footer(){
  return (
    <footer className='bg-[#061A23] py-8'>
      <div className="max-w-[320px] mx-auto xm:max-w-[500px] md:max-w-[768px] xl:max-w-[1280px]">
        <div className="flex flex-col md:flex-row md:flex-wrap xl:justify-center ">
          <div className="flex flex-col md:w-full md:flex-row md:py-6 xl:justify-around">
            <div className="mx-2 mb-4">
              <ul className="">
                <li className='flex items-start pt-3'>
                  <LocationSvg />
                  <p className="pb-3 ml-4 text-xl text-white open-sans">New Jersey, NJ 07032: <br /> 1000 Belleville Turnpike, Kearny</p>
                </li>
              </ul>
            </div>
            <div className="mx-2 mb-6">
              <ul className="">
                <li className="flex items-start pt-3">
                  <TelephoneSvg />
                  <p className="pb-3 ml-4 text-xl text-white open-sans">Feel Free to Call Us Now: <br /> (201) 305-9763</p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-[95%] h-px mx-2 border-none bg-slate-700 xl:w-full xl:mx-0"/>
          <div className="mx-2 mt-8 md:w-[47%] xl:w-1/4">
            <h6 className="text-white text-sm open-sans after:w-9 after:bg-[#C9534F] after:h-[2px] after:block after:mt-3">ABOUT US</h6>
            <ul className="mt-5">
              <li className="text-sm text-white open-sans py-0.5">New Jersey, NJ 07032</li>
              <li className="text-sm text-white open-sans py-0.5">1000 Belleville Turnpike, Kearny</li>
              <li className="text-white open-sans py-0.5 flex items-center text-sm md:w-[90%]"><span className='w-2/5 text-sm text-white open-sans py-0.5 md:w-2/5' >Mobile:</span> (201) 305 9763</li>
              <li className="text-white open-sans py-0.5 flex items-center text-sm md:w-[90%]"><span className='w-2/5 text-sm text-white open-sans py-0.5 md:w-2/5' >Asistance:</span>  (201) 772 5278</li>
              <li className="text-white open-sans py-0.5 flex items-center text-sm md:w-[90%] "><span className='w-2/5 text-sm text-white open-sans py-0.5 md:w-2/5' >E-mail:</span> kearnytruckcenter@gmail.com</li>
            </ul>
          </div>
          <div className="mx-2 mt-8 md:w-[47%] xl:w-1/4">
            <h6 className="text-white text-sm open-sans after:w-9 after:bg-[#C9534F] after:h-[2px] after:block after:mt-3">OUR SERVICES</h6>
            <ul className="mt-5">
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services#engine-diagnostics">Engine Diagnostics</a></li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services#lube-oil-filters">Lube, Oil and Filters</a></li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services#belts-hoses">Belts and Hoses</a></li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services#air-conditioning">Air Conditioning</a></li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services#brake-repair">Brake Repair</a></li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services#tire-wheel-services">Tire and Wheel Services</a></li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['✓'] before:w-8 text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services">Other Heavy Duty Truck Services</a></li>
            </ul>
          </div>
          <div className="mx-2 mt-8 md:w-[47%] xl:w-1/5">
            <h6 className="text-white text-sm open-sans after:w-9 after:bg-[#C9534F] after:h-[2px] after:block after:mt-3">QUICK LINKS</h6>
            <ul className="mt-5">
              <li className="before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="/">Home</a></li>
              <li className="before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="services">Services</a></li>
              <li className="before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="about-us">About us</a></li>
              <li className="before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><a className='text-white open-sans xl:hover:text-slate-300 xl:hover:cursor-pointer' href="contact-us">Contact us</a></li>
            </ul>
          </div>
          <div className="w-full mx-2 mt-8 md:w-2/5 xl:w-1/4">
            <h6 className="text-white text-sm open-sans after:w-9 after:bg-[#C9534F] after:h-[2px] after:block after:mt-3">HOURS</h6>
            <ul className="w-full mt-5">
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Monday:</span> 08:00am - 05:30pm</li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Tuesday:</span> 08:00am - 05:30pm</li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Wednesday: </span> 08:00am - 05:30pm</li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Thursday: </span> 08:00am - 05:30pm</li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Friday: </span> 08:00am - 05:30pm</li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Saturday: </span> 08:00am - 02:30pm</li>
              <li className="text-white open-sans before:pr-4 before:-ml-[30px] pl-[30px] before:text-lg before:align-text-top before:text-[#C9534F] before:content-['»'] before:w-8 flex items-center text-sm"><span className='w-2/5 text-sm text-white open-sans' >Sunday: </span> Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}