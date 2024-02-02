import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import './Filters.css'


export function Filters(){
  const idMinPrice = useId()
  const categoryFilterId = useId()
  const{filter, setFilter} = useFilter()
  
  const handleChangeMinPrice = e =>{
    const{value} = e.target
    setFilter(prevState => ({...prevState,minPrice:value}))
  }
  const hanldeChangeCategory = e =>{
    const{value} = e.target
    setFilter(prevState => ({...prevState,category:value}))
  }
  return(
    <section className="filters">
      <div>
        <label htmlFor={idMinPrice}>Precio a partir de: </label>
        <input 
        type="range"
        min='0'
        max='1000'
        id={idMinPrice}
        onChange={handleChangeMinPrice}
        value={filter.minPrice}
        />
        <span>${filter?.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={hanldeChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}