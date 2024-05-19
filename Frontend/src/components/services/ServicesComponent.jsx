export default function ServicesComponent({ image, description, rowReverse, id, title, reasons, paragraph, backgroundColor }){
  return (
    <div className={`flex flex-col w-full ${rowReverse ? 'md:flex-row-reverse' : 'md:flex-row'} ${backgroundColor ? 'bg-[#f1e6da]' : 'bg-white'}`} id={id}>
      <div className="h-auto md:w-1/2 md:bg-center md:bg-cover" style={{backgroundImage: `url(${image})`}}>
        <img src={image} alt="service image" className='w-full h-auto max-h-[581px] md:hidden' />
      </div>
      <div className="flex flex-col justify-between mx-auto px-4 max-w-[320px] py-8 xs:max-w-[400px] xm:max-w-[480px] sm:max-w-[550px] md:w-1/2 lg:justify-center lg:max-w-[480px] xl:max-w-[600px]">
        <h2 className='text-3xl text-center after:w-20 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 md:text-4xl xl:text-5xl'>{title}</h2>
        <h3 className="font-medium mt-9 open-sans lg:text-center lg:text-lg lg:mt-14 xl:text-xl">Service Overview</h3>
        <p className="mt-1 open-sans lg:text-center lg:mt-3 xl:text-lg">{description}</p>
        <h3 className="mt-6 font-medium open-sans lg:text-center lg:text-lg lg:mt-10 xl:text-xl">Why is it necessary?</h3>
        <ul className="mt-4">
          <li className="font-normal flex items-start flex-nowrap open-sans mb-2 pl-5 before:pr-5 before:content-['•'] before:text-4xl before:leading-6  before:font-[emoji] before:text-[#c9534f] lg:mb-4 xl:text-lg xl:before:leading-7">{reasons && reasons[0].title}<span className="contents open-sans">{reasons && reasons[0].description}</span></li>
          <li className="font-normal flex items-start flex-nowrap open-sans mb-2 pl-5 before:pr-5 before:content-['•'] before:text-4xl before:leading-6  before:font-[emoji] before:text-[#c9534f] lg:mb-4 xl:text-lg xl:before:leading-7">{reasons && reasons[1].title}<span className="contents open-sans">{reasons && reasons[1].description}</span></li>
          <li className="font-normal flex items-start flex-nowrap open-sans mb-2 pl-5 before:pr-5 before:content-['•'] before:text-4xl before:leading-6  before:font-[emoji] before:text-[#c9534f] lg:mb-4 xl:text-lg xl:before:leading-7">{reasons && reasons[2].title}<span className="contents open-sans">{reasons && reasons[2].description}</span></li>
          <li className="font-normal flex items-start flex-nowrap open-sans mb-2 pl-5 before:pr-5 before:content-['•'] before:text-4xl before:leading-6  before:font-[emoji] before:text-[#c9534f] lg:mb-4 xl:text-lg xl:before:leading-7">{reasons && reasons[3].title}<span className="contents open-sans">{reasons && reasons[3].description}</span></li>
          <li className="font-normal flex items-start flex-nowrap open-sans pl-5 before:pr-5 before:content-['•'] before:text-4xl before:leading-6  before:font-[emoji] before:text-[#c9534f] xl:text-lg">{reasons && reasons[4].title}<span className="contents open-sans">{reasons && reasons[4].description}</span></li>
        </ul>
        <p className="mt-6 open-sans lg:text-center lg:mt-10 xl:text-lg xl:before:leading-7">{paragraph}</p>
      </div>
    </div>
  )
};