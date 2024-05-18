import React, { isValidElement } from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../Components/FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='fooddisplay' id='fooddisplay'>
        <h2>Top dishes near you</h2>
        {/* mapping out the category sending props to the fooditem */}
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(category === "All" || category === item.category){
                return(
                  <FoodItem key={index} 
                   id={item._id}
                   name={item.name}
                   description={item.description}
                   price={item.price}
                   image={item.image}
                   
                   />
                  )

              }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay