import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
// import Signup from './Signup'
const login = () => {
  return (
    <div className='containerlogin'><div className='Form'>
   
     <h3>LOGIN</h3>
     <div className='Field'>
         <input type="text" placeholder='Email' />
         <input type="password" placeholder='Password' />
         <button className='loginbtn'>Login</button>
         <p className='Forget'>Forget Password?</p>
        <Link to="/Signup"><p className='ClickSignup'>Don't Have Account? Signup Here</p></Link> 
     </div>
 </div></div>
    
  )
}

export default login