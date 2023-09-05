import React from 'react'

const Form = () => {
  return (
    <form>
                <input type="text" placeholder="FullName" required />
                <input type="text" placeholder="Email" required />

          <input type="text" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required/>
          <button className="login">Registor</button>
          <a href="#">Forgot Password ?</a>
          <hr/>
          <button className="create-account">Login</button>
    </form>
  )
}

export default Form
