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
      <div className="categories">
        <div className="category-buttons">
          <button className={category === "men's clothing" ? "active category-button": "category-button"} onClick={mensButtonClicked}>Men's Clothing</button>
          <button className={category === "women's clothing" ? "active category-button": "category-button"} onClick={womensButtonClicked}>Women's Clothing</button>
          <button className={category === "jewelery" ? "active category-button": "category-button"} onClick={jewelryButtonClicked}>Jewelry</button>
          <button className={category === "electronics" ? "active category-button": "category-button"} onClick={electronicsButtonClicked}>Electronics</button>
        </div>
      </div>
      <div className="products">
        {products.map(product => (
          product.category === category ? (<ProductPreview key={product.id} product={product} />):
          null
        ))}
      </div>
    </div>
  )
}

export default Shop;