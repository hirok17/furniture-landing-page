import Hero from "../Component/home/Hero"
import WhyChoose from "../Component/home/WhyChoose"
import Products from "../Component/share/Products"

 
const Home = () => {
  return (
     <>
      <Hero />
      <WhyChoose />
      <Products title='Best Selling Product' />
     </>
  )
}

export default Home