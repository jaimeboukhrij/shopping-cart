import {createContext, useState } from "react";


export const FilterContext = createContext()

export function FiltersProvider ({children}){
  const[filter,setFilter] = useState({
    minPrice: 0,
    iuPrice: 0,
    category: 'all'
  })

  return(
    <FilterContext.Provider value ={ {
      filter,
      setFilter
    }}>

      {children}
    </FilterContext.Provider>
  )
}