import photo from '../../assets/expricences.png'
import Button from '../share/Button'
const Experience = () => {
  return (
    <section className='my-24'>
        <div className='section-container mx-auto flex flex-col lg:flex-row justify-around items-center'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div className='w-full lg:w-[32%] space-y-3.5'>
                <h3 className='text-xl uppercase text-[#F47E00] font-semibold'>experiences</h3>
                <h2 className='text-4xl font-bold text-[#1E1E1E] leading-13 dark:text-white'>we provide you the best experience</h2>
                <p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p> 
                <Button text='More Info' />   
            </div>
        </div>
    </section>
  )
}

export default Experience