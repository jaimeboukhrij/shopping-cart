import { useContext} from "react";
import { FilterContext } from "../context/filter";

export function useFilter(){
  const {filter, setFilter} = useContext(FilterContext)

  const filterProducts = (data) => {
    return data?.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (
          filter.category === 'all' ||
          product.category === filter.category
        )
        )
      })
    }
  return {filter, setFilter, filterProducts}
}