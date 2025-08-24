import { getImage } from "../../utils/getImageurl"
import Rating from "./Rating"

const ProductCart = ({product}) => {
  return (
  <div>
      <div className="bg-[#FAFAFA]">
        <img className="hover:scale-110 transition-all duration-400" src={getImage(`${product.imageUrl}`)} alt="" />
        <div className="bg-white dark:bg-black shadow-sm p-6">
            <h4 className="text-[#8D8D8D]">{product.category}</h4>
            <h2 className="text-[#091B3C] font-semibold text-xl mb-1">{product.name}</h2>
            <Rating rating={product.rating} />
        </div>
    </div>
  </div>
  )
}

export default ProductCart