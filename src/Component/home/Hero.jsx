import { FaSearch } from 'react-icons/fa'
import bannerImg from '../../assets/banner.png'

const Hero = () => {
  return (
     <section className='lg:h-[1084px] h-[700px] relative bg-center bg-cover text-white' style={{backgroundImage:`url(${bannerImg})`}}>
        <div className='text-center lg:pt-48 pt-30 lg:space-y-6 space-y-5 font-medium xl:w-1/2 lg:w-[70%] md:w-[50%] mx-auto'>
            <h1 className='text-2xl lg:text-6xl lg:leading-tight leading-snug'>Make your interior more minimalistic & modern</h1>
            <p className='text-lg lg:text-2xl font-normal md:w-[75%] mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

            {/* searce field */}
            <div className='relative inline-block z-30'>
                <input type="text" placeholder='Search furniture' className='bg-white/15 w-full lg:w-80 py-4 px-5 rounded-full border border-gray-300 text-white focus:outline-none' />
                <div className='absolute right-4 bottom-3 bg-[#E58411] p-2 rounded-full'>
                    <FaSearch />
                </div>
            </div>
        </div>
        {/* bottom blur effect */}
        <div className='absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm' /> 

        {/* hover button tooltip */}
     </section>
  )
}

export default Hero