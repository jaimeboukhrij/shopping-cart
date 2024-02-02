import { createContext, useState } from "react";
export const CartContext = createContext()
export const CartProvider = function({children}){
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

  return(
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
      {children}
    </CartContext.Provider>
  )
}