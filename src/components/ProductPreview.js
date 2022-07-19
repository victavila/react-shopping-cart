import "../styles/ProductPreview.css"
import { Link } from "react-router-dom";

const ProductPreview = ({product}) => {
  return (
    <Link className="product-link" to={`/shopping-cart/shop/${product.id}`}>
      <div className="product-preview">
        <img src={product.image} alt={product.name}></img>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductPreview;