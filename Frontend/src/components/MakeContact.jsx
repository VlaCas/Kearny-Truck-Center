export default function MakeContact() {
  return (
    <div className='flex flex-col items-center gap-4 p-6 md:flex-row md:justify-center md:items-center md:h-44 md:gap-0'>
      <h2 className='text-2xl text-center xs:text-3xl md:px-14 md:text-right lg:text-4xl'>Make an Appointment now with our Online Form</h2>
      <button className='bg-[#C9534F] w-56 rounded-full transition-all border-2 open-sans px-4 py-4 text-sm md:p-6 md:text-lg md:w-60 md:min-w-72 lg:hover:bg-[#892d2a]'>
        <a href="contact-us" title='make an apointment link' className='font-semibold text-white open-sans'>MAKE AN APPOINTMENT</a>
      </button>
    </div>
  );
};