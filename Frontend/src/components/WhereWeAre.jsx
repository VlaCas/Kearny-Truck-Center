import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

export default function WhereWeAre(){
  const center = [40.74920270435662, -74.10432883134831];
  const styles = { fillColor: '#C9534F', color: '#C9534F' }
  
  return (
    <>
      <h2 className='text-3xl text-center after:w-20 after:bg-[#C9534F] after:h-[2px] after:block after:mx-auto after:mt-5 lg:text-4xl xl:text-5xl'>Where We Are?</h2>
      <p className='px-4 leading-7 text-center mt-9 open-sans xs:max-w-[340px] xm:max-w-[440px] md:px-14 md:max-w-[640px] lg:max-w-[800px] lg:text-lg'>We are located at 1000 Belleville Turnpike, Kearny, NJ 07032, United States. <br /> Visit us we are waiting for you!</p>
      <MapContainer className='z-10 w-full h-[300px] mt-8 xs:rounded-2xl xs:max-w-[400px] xs:shadow-2xl xs:shadow-slate-700 xs:border-2 xs:border-[#C9534F] xm:h-[400px] xm:max-w-[500px] md:max-w-[768px] lg:max-w-[1000px] lg:h-[500px] xl:max-w-[1180px] 2xl:max-w-[1260px] 2xl:h-[600px]' center={center} zoom={15} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Circle center={center} pathOptions={styles} radius={90} />
        <Marker position={center} pathOptions={styles}>
          <Popup >
            <p href="" className='font-medium text-center open-sans'>Kearny Truck Center <br /> Your Truck is our Concern.</p>
          </Popup>
        </Marker>
      </MapContainer>
      <div className='flex justify-center'>
        <button className='bg-[#C9534F] py-4 px-6 rounded-full transition-all lg:hover:bg-[#892d2a] open-sans text-white mt-14'>
          <a href='about-us' className='font-semibold open-sans'>MORE ABOUT US</a>
        </button>
      </div>
    </>
  )
}