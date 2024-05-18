import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {

    
    const{cartItems, setCartItems, addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='fooditem'>
        <div className="food-item-image-container">
            <img src={image} className='food-item-image' alt="" />
            {
                !cartItems[id] ? <img src={assets.add_icon_white} className='add' onClick={() =>addToCart(id)}/> :
                 <div className='food-item-counter'> 
                    <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                 </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">
                {description}
            </p>
            <p className='food-item-price'>${price}</p>
        </div>
        
    </div>
  )
}

export default FoodItem