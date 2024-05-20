import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currentState , setCurrentstate] = useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className='Login-popup-container'>
            <div className="login-popup-tittle">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {
                    currentState === "Login" ? <><input type="text" placeholder='Your Name' required /></>: <></>
                }
                
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />

            </div>
            <button>{currentState==="Signup"? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {
                currentState ==="Login" ?  <p>Create a new Account? <span onClick={()=>setCurrentstate("Signup")}>Click here</span></p> :
                 <p>Already have an account? <span onClick={()=>setCurrentstate("Login")}>Login here</span></p>
            }
           
           
           
            
        </form>
     
    </div>
  )
}

export default LoginPopup