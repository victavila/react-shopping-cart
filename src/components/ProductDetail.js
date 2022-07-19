import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import "../styles/ProductDetail.css"

const ProductDetail = ({onAdd}) => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      setProduct({name: product.title, image: product.image, id: product.id, price: product.price, description: product.description, rate: product.rating.rate, ratings: product.rating.count});
    }

    fetchProduct();
  },[id])

  const ratingStars = [];

  for (let i = 0; i < Math.round(product.rate); i++) {
    ratingStars.push(<span key={i} className="fa fa-star checked"></span>);
  }
  for (let i = 0; i < 5 - Math.round(product.rate); i++) {
    ratingStars.push(<span key={Math.random()} className="fa fa-star"></span>);
  }

  return (
    product !== null ?
    <div className="product">
      <div className="left">
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className="right">
        <h3 className="name">{product.name}</h3>
        <div className="rating">
          <p>{ratingStars}</p>
          <p>{product.ratings} ratings</p>
        </div>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => {onAdd(product)}}>Add to Cart</button>
      </div>
    </div>:
    <div></div>
  )
}

export default ProductDetail;