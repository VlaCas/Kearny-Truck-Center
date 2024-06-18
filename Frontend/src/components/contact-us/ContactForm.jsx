import { useForm }  from 'react-hook-form';
import axios from "axios";

export default function ContactForm() {
  const methods = useForm({ mode: 'onSubmit' });
  const {register, handleSubmit, reset, formState: { errors }} = methods;
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://kearny-truck-center.onrender.com/api/sendEmail", data);
      console.log(response.data.message);
    } catch (error) {
      console.error(error)
    }
    reset();
  });
  
  return (
    <form className='w-full bg-[rgb(6,26,35)] px-4 py-6 border-b-2 border-[#C9534F] lg:relative lg:w-[620px] lg:border-y-2 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-[rgba(6,26,35,0.89)] xl:w-[1020px]' >
      <div className='flex flex-col max-w-[320px] mx-auto xm:max-w-[420px] md:max-w-[620px] md:flex-wrap md:flex-row md:justify-around xl:max-w-[920px]' >
        <h1 className='mb-8 text-3xl font-medium text-[#C9534F] text-center w-full lg:text-5 xl:text-6xl lg:mb-14'>Contact Form</h1>

        <div className='md:w-5/12'>
          <label htmlFor="name" className={`block font-medium mb-[-2px] text-[#C9534F] text-base sm:text-lg xl:text-2xl xl:mb-0`}>Full Name</label>
          <input id='name' className={`text-white w-full open-sans bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 placeholder:text-slate-500 xs:mb-8 xm:mb-10 xm:text-base xl:mb-12`} type="text" {...register('name', { required: { value: true, message: 'What is your name?' }, pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,32}$/, message: 'The name can only contain letters and a maximum of 32 characters.' }})} placeholder='full name' />
          {(errors.name && errors.name.message) ? <span className='relative text-xs text-red-600 -top-6 open-sans xs:-top-8 xm:-top-10 sm:text-sm xl:-top-12 xl:font-medium'>{errors.name.message}</span> : ''}
        </div>
      
        <div className='md:w-5/12'>  
          <label htmlFor="email" className={`block font-medium mb-[-2px] text-[#C9534F] text-base sm:text-lg xl:text-2xl xl:mb-0`}>Email</label>
          <input id='email' className={`text-white  w-full open-sans bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 placeholder:text-slate-500 xs:mb-8 xm:mb-10 xm:text-base xl:mb-12`} type="text" {...register('email', { required: { value: true, message: 'What is your Email?' }, pattern: { value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, message: 'The email must have a valid format.' } })} placeholder='email@example.com' />
          {(errors.email && errors.email.message) ? <span className='relative text-xs text-red-600 -top-6 open-sans xs:-top-8 xm:-top-10 sm:text-sm xl:-top-12 xl:font-medium'>{errors.email.message}</span> : ''}
        </div>

        <div className='md:w-5/12'>
          <label htmlFor="phoneNumber" className={`block font-medium mb-[-2px] text-[#C9534F] text-base sm:text-lg xl:text-2xl xl:mb-0`}>Phone Number <span className='text-[10px] text-sm'> (optional)</span></label>
          <input id='phoneNumber' className= {`text-white  w-full open-sans bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 placeholder:text-slate-500 xs:mb-8 xm:mb-10 xm:text-base xl:mb-12`} placeholder='1234567890' type="tel" {...register('phoneNumber', { required: { value: false }, pattern: { value: /^\d{10}$/, message: 'The phone number must follow the format: 1234567890'}})} />
          {(errors.phoneNumber && errors.phoneNumber.message) ? <span className='relative text-xs text-red-600 -top-6 open-sans xs:-top-8 xm:-top-10 sm:text-sm xl:-top-12 xl:font-medium'>{errors.phoneNumber.message}</span> : ''}
        </div>
        
        <div className='md:w-5/12'>
          <label htmlFor="address" className={`block font-medium mb-[-2px] text-[#C9534F] text-base sm:text-lg xl:text-2xl xl:mb-0`}>Address</label>
          <input id='address' className= {`text-white  w-full open-sans bg-transparent border-b border-solid rounded-none focus:outline-none focus:border-b-[1px] focus:border-b-[solid] mb-6 placeholder:text-slate-500 xs:mb-8 xm:mb-10 xm:text-base xl:mb-12`} placeholder='address' type="text" {...register('address', { required: { value: true, message: 'What is your Address?' }, pattern: { value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9-/(),\. ]{1,50}$/, message: 'The address can only contain letters and the following symbols: "-/(),." and a maximum of 50 characters.'}})} />
          {(errors.address && errors.address.message) ? <span className='relative text-xs text-red-600 -top-6 open-sans xs:-top-8 xm:-top-10 sm:text-sm xl:-top-12 xl:font-medium'>{errors.address.message}</span> : ''}
        </div>
        
        <div className='md:w-5/12'>
          <label htmlFor="note" className='block font-medium mb-[2px] text-[#C9534F] text-base sm:text-lg xl:text-2xl xl:mb-1'>Tell us, how we can help you?</label>
          <textarea id='note' className='w-full bg-transparent border p-1 border-solid open-sans rounded-[4px] text-white focus:outline-none focus:border focus:border-[solid] placeholder:text-slate-500 mb-6 resize-none placeholder:text-center placeholder:text-base placeholder:leading-[3rem] xs:mb-8 xm:mb-8 xl:mb-12' placeholder='Type here...' type="text" rows={2} {...register('note', { required: { value: true, message: 'Tell us something.' }})} />
          {(errors.note && errors.note.message) ? <span className='relative text-xs text-red-600 -top-6 open-sans xs:-top-8 xm:-top-10 sm:text-sm xl:-top-12 xl:font-medium'>{errors.note.message}</span> : ''}
        </div>

        <div className='md:w-5/12'>
          <div className='flex items-center mb-6 xs:mb-8 xm:mb-10 xm:text-base xl:mb-12'>
            <input id='condition' value='I understand that by filling out this form, I consent to receive text messages from Kearny Truck Center.' className= {`text-white w-10 h-10 mr-4 bg-gray-800 border-0 checked:bg-[#C9534F] md:w-16 lg:cursor-pointer`} placeholder='condition' type="checkbox" {...register('condition', { required: { value: true, message: 'Please, you have to agree.' }})} />
            <label htmlFor="address" className={`block font-light text-[#C9534F] text-base sm:text-lg xl:text-xl`}>I understand that by filling out this form, I consent to receive text messages or mails from Kearny Truck Center.</label>
          </div>
          {(errors.condition && errors.condition.message) ? <span className='relative text-xs text-red-600 -top-6 open-sans xs:-top-8 xm:-top-10 sm:text-sm xl:-top-12 xl:font-medium'>{errors.condition.message}</span> : ''}
        </div>
        
        <div className='flex justify-center w-full '>
          <button type='submit' className='bg-[#C9534F] w-56 mb-4 rounded-full transition-all border-0 open-sans px-4 py-4 text-sm lg:hover:bg-[#892d2a]' onClick={onSubmit}>
            <p className='font-semibold text-white open-sans lg:text-lg'>SEND</p>
          </button>
        </div>
      </div>
    </form>
  );
};