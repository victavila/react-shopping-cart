import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom"

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

  return (
    product !== null ?
    <div className="product">
    <div className="left">
      <img src={product.image} alt={product.name}></img>
    </div>
    <div className="right">
      <h3 className="name">{product.name}</h3>
      <div className="rating">
        <p>{product.rate}</p>
        <p>{product.ratings} ratings</p>
      </div>
      <h4>${product.price}</h4>
      <p>{product.description}</p>
      </div>
      <button onClick={() => {onAdd(product)}}>Add</button>
    </div>:
    <div></div>
  )
}

export default ProductDetail;