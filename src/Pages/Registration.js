import React from 'react'
// import Form from '../Components/Login/Form'
import Form from "../Components/Registration/Form"

const Registration = () => {
  return (
    <div className="content">
    <div className="flex-div">
      <div className="name-content">
        <h1 className="logo">Facebook Registration</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
         <Form/>
    </div>
  </div>
  )
}

export default Registration
