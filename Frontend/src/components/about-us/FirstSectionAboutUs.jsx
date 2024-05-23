import HexagonSvg from "../svg/Hexagon";
import AboutUsSvg from "../svg/AboutUs";

export default function FirstSection() {
  return (
    <div className="absolute w-full px-4 py-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-[350px] xm:max-w-[450px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[950px]">
      <div className="flex flex-col items-center gap-8 xl:gap-12">
        <HexagonSvg>
          <AboutUsSvg />
        </HexagonSvg>
        <h1 className="text-4xl text-center text-white xm:text-5xl sm:text-6xl" style={{ textShadow: '1px 1px 2px #000000, 0 0 1em #000000, 0 0 0.2em #000000' }}>About Us</h1>
        <h3 className="text-sm font-semibold text-center text-white open-sans sm:text-base lg:font-light lg:text-xl" style={{ textShadow: '1px 1px 2px #000000, 0 0 1em #000000, 0 0 0.2em #000000' }}>Since 2016, <span className="font-bold open-sans">Kearny Truck Center</span> has been a cornerstone in the New Jersey community, delivering top-notch service for <span className="font-bold open-sans">Heavy Duty Truck</span> and <span className="font-bold open-sans">Commercial Trailer</span>. Our skilled mechanics are dedicated to keeping trucks in peak condition, ensuring the safety and efficiency of our local truckers.</h3>
      </div>
    </div>
  )
};