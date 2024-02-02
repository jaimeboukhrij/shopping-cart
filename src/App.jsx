import './App.css'
import { Products } from './components/Products'
import {Header} from './components/Header'
import { useProducts } from './hooks/useProducts'
import { useFilter } from './hooks/useFilter'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const {initialProdcuts} =useProducts()
  const{filterProducts} = useFilter()
  const filteredProdcuts = filterProducts(initialProdcuts)
  return (
    <>
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProdcuts} />
    </CartProvider>
    </>
  )
}

export default App
