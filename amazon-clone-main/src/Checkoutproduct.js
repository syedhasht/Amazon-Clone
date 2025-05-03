import React from 'react'
import './checkoutproduct.css'

// import { useState } from 'react';
import { useStateValue } from './Stateprovider';
function Checkoutproduct({id,title,image,rating,price}) {
    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>
    {
        if(window.confirm('Are you sure you want to delete this')){
dispatch({
    type: 'REMOVE_FROM_BASKET',
    id:id
        })}
    }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutproduct_image' src={image}/>
    
    <div className='checkoutproduct_info'>
        <p className='checkoutproduct_title'>
{title}
        </p>
        <p className='checkoutproduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutproduct_rating'>
        {Array(rating).fill().map((_, i)=>(

<p>🌟</p>
  ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
        
    </div>
    </div>
  )
}

export default Checkoutproduct
