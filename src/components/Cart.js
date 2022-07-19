import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = ({ cartItems, onIncrement, onDecrement, getCartTotal, onRemove }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {
        cartItems.length === 0 ?
        <div>
          <h3>Cart is empty</h3>
        </div>:
        <div>
          <div className="cart-items">{
          cartItems.map(item => (
            <CartItem key={item.name} item={item} onIncrement={onIncrement} onDecrement={onDecrement} onRemove={onRemove} />
          ))
          }
          </div>
          <div className="cart-total">
            <h3 className="total-title">Cart Total</h3>
            <div className="total">
              <p>Total</p>
              <p>${getCartTotal()}</p>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart;