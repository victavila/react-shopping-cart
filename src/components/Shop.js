import React, { useEffect, useState} from "react";
import "../styles/Shop.css"
import ProductPreview from "./ProductPreview";


const Shop = () => {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("men's clothing");

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    products.forEach(product => {
      setProducts((prevArr) => [...prevArr, {name: product.title, image: product.image, price: product.price, category: product.category, id: product.id}])
    })
  }

  const mensButtonClicked = () => {
    setCategory("men's clothing")
  }

  const womensButtonClicked = () => {
    setCategory("women's clothing")
  }

  const jewelryButtonClicked = () => {
    setCategory("jewelery")
  }

  const electronicsButtonClicked = () => {
    setCategory("electronics")
  }


  useEffect(() => {
    fetchProducts();
  }, [])
  
  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="categories">
        <div className="category-buttons">
          <button onClick={mensButtonClicked}>Men's Clothing</button>
          <button onClick={womensButtonClicked}>Women's Clothing</button>
          <button onClick={jewelryButtonClicked}>Jewelry</button>
          <button onClick={electronicsButtonClicked}>Electronics</button>
        </div>
      </div>
      <div className="products-grid">
        {products.map(product => (
          product.category === category ? (<ProductPreview key={product.id} product={product} />):
          null
        ))}
      </div>
    </div>
  )
}

export default Shop;