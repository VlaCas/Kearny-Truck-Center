import Hexagon2Svg from "../svg/Hexagon2";
import MaterialsSvg from "../svg/Materials";
import PersonalSvg from "../svg/Personal";
import CraneTruckSvg from "../svg/CraneTruck";

export default function WhyChooseUs() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center after:w-20 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 xl:text-4xl">Why Choose Us?</h2>
        <p className="leading-7 text-center mt-9 open-sans xs:max-w-[460px] ">We are one of the leading truck repair shops serving customers in New Jersey. <br /> All mechanic services are performed by highly qualified mechanics.</p>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col items-center">
          <Hexagon2Svg>
            <PersonalSvg />
          </Hexagon2Svg>
          <h4 className="mt-4 text-xl after:w-10 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 xl:text-2xl">Every Job is Personal</h4>
          <p className="mt-5 text-sm text-center open-sans xs:max-w-[460px] ">If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.</p>
        </div>
        <div className="flex flex-col items-center">
          <Hexagon2Svg>
            <MaterialsSvg />
          </Hexagon2Svg>
          <h4 className="mt-4 text-xl after:w-10 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 xl:text-2xl">Best Materials</h4>
          <p className="mt-5 text-sm text-center open-sans xs:max-w-[460px] ">We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.</p>
        </div>
        <div className="flex flex-col items-center">
          <Hexagon2Svg>
            <CraneTruckSvg />
          </Hexagon2Svg>
          <h4 className="mt-4 text-xl after:w-10 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 xl:text-2xl">Professional Standards</h4>
          <p className="mt-5 text-sm text-center open-sans xs:max-w-[460px]">Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#C9534F] py-4 px-6 rounded-full transition-all lg:hover:bg-[#892d2a] open-sans text-white">
          <a href="about-us" title="about us page" className="font-semibold open-sans">READ MORE</a>
        </button>
      </div>
    </>
  )
};