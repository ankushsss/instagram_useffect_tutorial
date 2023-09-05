import React from 'react'
import {Link} from "react-router-dom"
const Form = () => {
  return (
    <form>
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required/>
          <button className="login">Log In</button>
          <a href="#">Forgot Password ?</a>
          <hr/>
          <Link to="/registration"><button className="create-account">Create New Account</button></Link>
    </form>
  )
}

export default Form
