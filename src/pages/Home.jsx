import Experience from "../Component/home/Experience"
import Hero from "../Component/home/Hero"
import Meterials from "../Component/home/Meterials"
import Testimonials from "../Component/home/Testimonials"
import WhyChoose from "../Component/home/WhyChoose"
import Products from "../Component/share/Products"

 
const Home = () => {
  return (
     <>
      <Hero />
      <WhyChoose />
      <Products title='Best Selling Product' />
      <Experience />
      <Meterials />
      <Testimonials />
     </>
  )
}

export default Home