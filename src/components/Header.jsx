import { useFilter } from "../hooks/useFilter";
import { Filters } from "./Filters";

export function Header(){

  return(
    <header>
      <h1>REACT SHOP 🛒</h1>
      <Filters />
    </header>
  )
}