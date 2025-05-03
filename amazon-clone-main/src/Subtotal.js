import React from 'react'
import './subtotal.css'

import { useState } from "react";
import { useStateValue } from "./Stateprovider";
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    
    
  const [{basket},dispatch]=useStateValue()
  const getTotalPrice = () => 
    basket.reduce((total, item) => total + item.price, 0);
  return (
    <div className='subtotal'>
       <CurrencyFormat
  renderText={(value) => (
    <>
      <p>
        Subtotal ({basket.length} items):
        <strong>{value}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
    </>
  )}
  decimalScale={2}
  value={getTotalPrice()}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"$"}
/>
<button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
