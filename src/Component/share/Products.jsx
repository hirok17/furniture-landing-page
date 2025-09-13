import { useState } from "react";
import { products } from "../../utils/products";
import ProductCart from "./ProductCart";
import icon from '../../assets/button-icon.png'

const Products = ({ title }) => {
    const categories =['Chair', 'Beds', 'Sofa', 'Lamp'];
    const [selectCategory, setSelectCategory] =useState('Chair');
    const [visibleProducts, setVisibleProducts] =useState(4);
    const filterProducts=products.filter(product=>product.category === selectCategory);

    const loadMore=()=>{
      setVisibleProducts((prev)=>prev + 4);
    }
  return (
    <section className="mt-14 bg-[#F7F7F7] dark:bg-[#101828] py-5">
      <div className="section-container">
        <div>
          <h2 className="text-[#1E1E1E] text-4xl font-bold text-center dark:text-white">
            {title}
          </h2>
        </div>
        <div className="bg-[#EEEEEE] max-w-md mx-auto py-2.5 rounded-full mt-10">
          <div className="ml-3">
            {
                categories.map(category=>(
                    <button onClick={()=>{
                       setSelectCategory(category);
                      setVisibleProducts(4);
                    }} 
                    
                    className={`py-1.5 sm:py-3 px-8 hover:bg-[#E58411] hover:text-white transition-colors rounded-full cursor-pointer
                      ${selectCategory === category ? 'bg-white text-orange-400' : 'text-[#1E1E1E]'}
                      `} key={category}>{category}</button>
                ))
            }

          </div>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {
            filterProducts.slice(0, visibleProducts).map((product, index)=><ProductCart key={index} product={product}></ProductCart>)
          }
        </div>
        {
          visibleProducts < filterProducts.length &&(
            <div className="flex justify-center mt-5">
            <button onClick={loadMore} className='text-lg primary-color flex items-center gap-1 cursor-pointer'> View All <img src={icon} alt="" /></button>
        </div>
          )
        }
      </div>
    </section>
  );
};

export default Products;
