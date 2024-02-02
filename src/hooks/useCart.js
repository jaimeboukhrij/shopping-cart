import { useContext, useEffect, useState } from "react";
import {CartContext} from '../context/cart'
export function useCart(){
const {cart, setCart} = useContext(CartContext)  
const updateCart = ({id,title,price,thumbnail,quantity}) =>{
  const isOnCar = cart?.some(elem => elem.id === id)
  quantity += 1
  let newCart
  if(isOnCar){
    newCart = cart.map(elem => {
      let newQuantity = elem.quantity
      if(elem.id === id){
      newQuantity = elem.quantity + 1
      }
      return{
        ...elem,
        quantity:newQuantity
      }
    })
  }else{
    newCart =[
      ...cart,
      {
        id,title,price,thumbnail,quantity
      }
    ]
  }
  localStorage.setItem('cart', JSON.stringify(newCart))
  setCart(newCart)
}
const removeFromCart = ({id}) =>{
  let newCart = cart.filter(elem => elem.id !== id)
  localStorage.setItem('cart', JSON.stringify(newCart))
  setCart(newCart)
}
const cleartCart = () => {
  localStorage.setItem('cart', JSON.stringify([]))
  setCart([])}
return {updateCart, cart,removeFromCart,cleartCart}
}