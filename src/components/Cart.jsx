import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'


function CartItem ({ thumbnail, price, title, quantity, updateCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={updateCart} >+</button>
      </footer>
    </li>
  )
}

export function Cart (){
  const cartCheckboxId = useId()
  const{cart,updateCart,cleartCart} = useCart()
  return(
    <>
    <label className='cart-button' htmlFor={cartCheckboxId}>
      <CartIcon />
    </label>
    <input id={cartCheckboxId} type='checkbox' hidden />

    <aside className='cart'>
    <ul>
          {cart?.map(product => (
            <CartItem
              key={product.id}
              updateCart={() => updateCart(product)}
              {...product}
            />
            
          ))}
        </ul>

      <button onClick={cleartCart} >
        <ClearCartIcon />
      </button>
    </aside>
  </>
  )
}