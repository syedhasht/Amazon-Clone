import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';

import { useStateValue } from './Stateprovider';
import Checkoutproduct from './Checkoutproduct';

function Checkout() {
  const [{basket},dispatch]=useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='hello'  src="https://australianstockimages.com.au/storage/photos/1778/detail.jpg"
          alt="Amazon Ad"
        />
        <h2 className='checkout_title'>Your shopping Basket</h2>
        {basket.map( item =>(
          <Checkoutproduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
      </div>
      <div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
