import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link className="shop-link" to="/shopping-cart/shop">
        <div>
          Shop Now
        </div>
      </Link>
    </div>
  )
}

export default Home;