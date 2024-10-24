import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
// import user from '../img/user.png'
import user1 from '../img/user1.jpg'



const Navbar = () => {
  return (
    
    <nav>
       {/* <FontAwesomeIcon icon={faHouse} /> */}
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/help">Help</Link></li>
    </ul>
   <Link to="/Login" className='account'><img src={user1} alt="User" /></Link> 
</nav>
   
  )
}

export default Navbar;