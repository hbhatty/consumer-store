import React, { useContext } from 'react'
import { StoreContext } from '../context-reducer/StoreContext'

export const Product = ({ item }) => {
  const {addBasket} = useContext(StoreContext);
  const handleClick = () => {
    addBasket(item)
  }
  return (
    <div className='mx-auto px-8 border border-gray-200 rounded-lg'>
      <img src={item.image} alt="glasses" />
      <div className='flex flex-row items-center justify-between'>
        <div>
          <p className='text-xl'>{item.name}</p>
          <p className='text-lg'>${item.price}</p>
        </div>
        <button onClick = {handleClick} className='bg-indigo-500 text-white text-lg font-medium rounded-full p-4'>Add to Basket</button>
      </div>
    </div>
  )
}
