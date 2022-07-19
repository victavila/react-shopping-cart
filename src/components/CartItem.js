import "../styles/CartItem.css"

const CartItem = ( { item, onDecrement,  onIncrement, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="image">
        <img src={item.image} alt={item.name}></img>
      </div>
      <div className="item-right">
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
        <div className="buttons">
          <button className="remove" onClick={() => onRemove(item)}>Remove Item</button>
          <div className="quantity">
            <button onClick={() => onDecrement(item)}>-</button>
            <p>{item.count}</p>
            <button onClick={() => onIncrement(item)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;