import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

import "./styles/App.css"

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const getCartTotal = () => {
    const total = cartItems.reduce((prev, cur) => prev + (cur.price * cur.count), 0);
    return total.toFixed(2);
  }

  const getCartCount = () => {
    const count = cartItems.reduce((prev, cur) => prev + (cur.count), 0);
    return count;
  }

  const incrementCount = (product) => {
    const  newCartItems = cartItems.map(item => {
      if (item.name === product.name && item.count < 99) {
        let currentCount = item.count;
        return {...item, count: currentCount + 1};
      }

      return item;
    });
    setCartItems(newCartItems);
  };

  const decrementCount = (product) => {
    const  newCartItems = cartItems.map(item => {
      if (item.name === product.name && item.count > 1) {
        let currentCount = item.count;
        return {...item, count: currentCount - 1};
      }

      return item;
    });
    setCartItems(newCartItems);
  };

  const checkCart = (product) => {
    const newCartItems = cartItems;
    for (let item in newCartItems) {
      if (newCartItems[item].name === product.name) {
        return false;
      }
    };
    return true;
  }

  const addToCart = (product) => {
    if (checkCart(product)) {
      setCartItems(prevArr => [...prevArr, {...product, count: 1}]);
    } else {
      incrementCount(product);
    }
  }

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.name !== product.name));
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Nav getCount={getCartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail onAdd={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onIncrement={incrementCount} onDecrement={decrementCount} getCartTotal={getCartTotal} onRemove={removeFromCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
