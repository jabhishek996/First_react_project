import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='containerlogin'><div className='Form'>

            <h3>SIGNIN</h3>
            <div className='Field'>
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Confirm Password' />
                <button className='loginbtn'>Sign in</button>
                <Link to="/Login"><p className='ClickSignup'>Already Have Account? Sign up Here</p></Link>
            </div>
        </div></div>

    )
}

export default Signup