import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const incrementCount = (product) => {
    const  newCartItems = cartItems.map(item => {
      if (item.name === product.name) {
        let currentCount = item.count;
        return {...item, count: currentCount + 1};
      }

      return item;
    });
    setCartItems(newCartItems);
  }

  const addToCart = (product) => {
    if (cartItems.length === 0) {
      setCartItems(prevArr => [...prevArr, {...product, count: 1}]);
    } else {
      const newCart = cartItems;
      newCart.forEach(item => {
        if (item.name === product.name) {
          incrementCount(product);
        } else {
          setCartItems(prevArr => [...prevArr, {...product, count: 1}]);
        }
      });
    }
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail onAdd={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
