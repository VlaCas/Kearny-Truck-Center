import image23 from '../../assets/images/image-23.jpg';

export default function SecondSection() {
  return (
    <>
      <div className="h-full md:w-1/2 md:h-[650px] md:bg-center md:bg-cover" style={{backgroundImage: `url(${image23})`}}>
        <img src={image23} alt="Truck Image" className='w-full h-auto md:hidden' />
      </div>
      <div className="flex flex-col justify-between px-4 py-8 xm:w-full md:w-1/2">
        <h2 className='text-3xl text-center after:w-20 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 md:text-4xl xl:text-5xl'>Our History and Mission</h2>
        <p className='mx-auto mt-9 open-sans leading-7 max-w-[310px] xs:max-w-[350px] xm:max-w-[400px] sm:max-w-[450px] sm:text-center md:mt-16 md:max-w-[360px] lg:max-w-[420px] lg:mt-20 xl:text-lg xl:max-w-[600px] xl:mt-24'>At Kearny Truck Center, we have been in business since 2016 with the best willingness to serve our clients with the quality and professionalism they deserve. We have always kept our focus focused on the highest possible performance of their Heavy Duty Trucks and Commercial Trailers. We have teamed up with the best technical professionals to carry out any type of service with high speed and efficiency. Our mission is committed to serving the town with the highest performance, may your trust always be on our side.</p>
        <div className='flex justify-center'>
          <button className="bg-[#C9534F] py-4 px-6 rounded-full transition-all lg:hover:bg-[#892d2a] open-sans text-white mt-12 md:mt-16 lg:mt-20 xl:mt-24">
              <a href="contact-us" title='contact us' className="font-semibold open-sans">CONTACT US</a>
          </button>
        </div>
      </div>
    </>
  )
}