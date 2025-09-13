import { FiPlus } from "react-icons/fi"
import { getImage } from "../../utils/getImageurl"
import Rating from "./Rating"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const ProductCart = ({product}) => {
  const {addToproduct} =useContext(ThemeContext);
  return (
  <div>
      <div className="bg-[#FAFAFA]">
        <img className="hover:scale-110 transition-all duration-400" src={getImage(`${product.imageUrl}`)} alt="" />
        <div className="bg-white dark:bg-black shadow-sm p-6">
            <h4 className="text-[#8D8D8D]">{product.category}</h4>
            <h2 className="text-[#091B3C] font-semibold text-xl mb-1 dark:text-white">{product.name}</h2>
            <Rating rating={product.rating} />
            <div className="mt-5 flex justify-between items-center">
              <p className="text-[#091B3C] text-xl font-semibold dark:text-white"><sup>$</sup><span>{product.price}</span></p>
              <button onClick={()=>addToproduct(product)} className="bg-[#091B3C] text-white p-2 rounded-full cursor-pointer hover:scale-110 transition-all">
                <FiPlus />
              </button>
            </div>
        </div>
    </div>
  </div>
  )
}

export default ProductCart