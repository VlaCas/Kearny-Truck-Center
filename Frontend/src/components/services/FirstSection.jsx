import HexagonSvg from "../svg/Hexagon"
import MaterialsSvg from "../svg/Materials"

export default function FirstSection() {
  return (
    <div className="absolute w-full px-4 py-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 max-w-[350px] xm:max-w-[450px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[950px]">
      <div className="flex flex-col items-center gap-8 xl:gap-12">
        <HexagonSvg>
          <MaterialsSvg color={'white'}/>
        </HexagonSvg>
        <h1 className="text-4xl text-center text-white xm:text-5xl sm:text-6xl" style={{ textShadow: '1px 1px 2px #000000, 0 0 1em #000000, 0 0 0.2em #000000' }}>Our Services</h1>
        <h3 className="text-sm font-normal text-center text-white open-sans sm:text-base lg:font-light lg:text-xl" style={{ textShadow: '1px 1px 2px #000000, 0 0 1em #000000, 0 0 0.2em #000000' }}>We offer comprehensive garage services to <span className="font-bold open-sans">Heavy Duty Truck</span> and <span className="font-bold open-sans">Commercial Trailer</span> owners in New Jersey. Our professionals are skilled in a variety of vehicle services, ensuring your <span className="font-bold open-sans">Heavy Duty Truck</span> or <span className="font-bold open-sans">Commercial Trailer</span> performs optimally. </h3>
      </div>
    </div>
  )
};