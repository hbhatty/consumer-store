import React, { useContext } from 'react'
import { StoreContext } from '../context-reducer/StoreContext'


 const BasketProduct = ({item}) => {
  const {removeBasket} = useContext(StoreContext)
  const handleRemove = () =>{
    removeBasket(item)
  }
  return (
    <div >
        <img src = {item.image} alt = {item.name + "glasses"}
        className = "w-60"/>
        <div>
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
        </div>
        <button onClick={handleRemove} className='bg-indigo-500 text-white text-lg font-medium rounded-lg p-4 hover:bg-red-500'>
          Remove
        </button>
    </div>
  )
}
export default BasketProduct
