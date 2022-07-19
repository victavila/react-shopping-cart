import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ getCount }) => {
  return (
    <nav>
      <Link className="nav-link" to="/shopping-cart/">
        <h1>Shopping Cart</h1>
      </Link>
      <ul className="nav-links">
        <Link className="nav-link" to="/shopping-cart/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/shopping-cart/shop">
          <li>Shop</li>
        </Link>
        <Link className="nav-link" to="/shopping-cart/cart">
          <li>{
          getCount() > 0 ?
          <span>Cart ({getCount()})</span>:
          <span>Cart</span>
          }
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;