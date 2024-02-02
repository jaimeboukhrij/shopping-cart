import { useEffect, useState } from "react";
import { productsFromApi } from "../services/products";

export function useProducts(){
  const [initialProdcuts, setProducts] = useState()
  useEffect(()=>{
    productsFromApi().then(data =>{
      const newData = data.map(elem => {
        return{
          ...elem,
          quantity:0
        }
      })
      setProducts(newData)})
  },[])
  return {initialProdcuts, setProducts}
}