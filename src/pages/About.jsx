import aboutBg from '../assets/about-background.jpg'
import Experience from '../Component/home/Experience'

const About = () => {
  return (
    <section>
      <div className='w-full h-[400px] bg-no-repeat bg-cover flex justify-center items-center' style={{backgroundImage:`url(${aboutBg})`}}>
          <h2 className='text-4xl font-bold text-white'>About us</h2>
      </div>
      <Experience />
    </section>
  )
}

export default About