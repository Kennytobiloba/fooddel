import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const{food_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCAmountart} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index) => {
            if(cartItems[item._id] > 0){
              return(
                <div key={index} >
                <div className='cart-items-title cart-items-item'>
                 <img src={item.image} alt="" />
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>${item.price*cartItems[item._id]}</p>
                 <p onClick={()=> removeFromCart(item._id)} className='cross'>X</p>

                </div>
                <hr />
                </div>
                
              )
            }

          })
        }
      </div>
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
          <button onClick={()=> navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div><p>If you have a promo code enter it here</p></div>
          <div className='cart-promo-code-input'>
            <input type="text" placeholder='promo-code' />
            <button>Submit</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart