
export function productsFromApi(){
  return fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(({products}) => products)
  .catch(e => console.log(e))
}