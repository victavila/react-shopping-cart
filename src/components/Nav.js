import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ getCount }) => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <h1>Shopping Cart</h1>
      </Link>
      <ul className="nav-links">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="nav-link" to="/cart">
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