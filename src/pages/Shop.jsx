import banner from '../assets/banner.png'
import Products from '../Component/share/Products';

const Shop = () => {
  return (
    <section>
      <div
        className="w-full h-[450px] bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className='text-white text-3xl font-bold'>Shop Our Products</h2>
      </div>
      <Products title="What's Your Choice" />
    

    </section>
  );
}

export default Shop