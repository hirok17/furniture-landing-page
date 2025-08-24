import { products } from "../../utils/products";
import ProductCart from "./ProductCart";

const Products = ({ title }) => {
    const categories =['Chair', 'Beds', 'Sofa', 'Lamp'];
  return (
    <section className="mt-14 bg-[#F7F7F7] py-5">
      <div className="section-container">
        <div>
          <h2 className="text-[#1E1E1E] text-4xl font-bold text-center">
            {title}
          </h2>
        </div>
        <div className="bg-[#EEEEEE] max-w-md mx-auto py-2.5 rounded-full mt-3">
          <div className="ml-3">
            {
                categories.map(category=>(
                    <button className={`py-1.5 sm:py-3 px-8 hover:bg-[#E58411] hover:text-white transition-colors rounded-full cursor-pointer`} key={category}>{category}</button>
                ))
            }

          </div>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {
            products.map((product, index)=><ProductCart key={index} product={product}></ProductCart>)
          }
        </div>
      </div>
    </section>
  );
};

export default Products;
