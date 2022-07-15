import "../styles/ProductPreview.css"
import { Link } from "react-router-dom";

const ProductPreview = ({product}) => {
  return (
    <Link to={`/shop/${product.id}`}>
      <div className="product-preview">
        <img src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
      </div>
    </Link>
  )
}

export default ProductPreview;