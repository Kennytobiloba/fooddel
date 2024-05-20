import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../../Context/StoreContext'
const Placeorder = () => {
  const {getTotalCAmountart} =useContext(StoreContext)
  return (
    <form action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">
          Delivery Information </p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='city' />
            <input type="text" placeholder='state' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />

          </div>
          <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-button">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-details">
              <p>Subtotal</p>
              <p>{getTotalCAmountart()}</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>{getTotalCAmountart()+2}</b>
            </div>
           
          </div>
          <button >PROCEED TO Payment</button>
        </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder