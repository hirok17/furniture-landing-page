import contactbg from '../assets/contact-background.jpg'
import Meterials from '../Component/home/Meterials'
const Contact = () => {
  return (
      <section>
      <div className='w-full h-[400px] bg-no-repeat bg-cover flex justify-center items-center' style={{backgroundImage:`url(${contactbg})`}}>
          <h2 className='text-4xl font-bold text-white'>Contact us</h2>
      </div>
    <Meterials />
    </section>
  )
}

export default Contact