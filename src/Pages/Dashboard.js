import React from 'react'
import Profile from '../Components/Dashboard/Profile'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <main>
    <header>
      <div class="tb">
        <div class="td" id="logo">
          <a href="#"><i class="fab fa-facebook-square"></i></a>
        </div>
    
        <div class="td" id="f-name-l"><span>Himalaya's facebook</span></div>
        <div class="td" id="i-links">
          <div class="tb">
            <div class="td" id="m-td">
              <div class="tb">
                <Link to="/dashboard/profile"><span class="td"><i class="material-icons">Profile</i></span></Link>
                <Link to="/dashboard/chat"><span class="td"><i class="material-icons">Chat</i></span></Link>
                <Link to="/dashboard/notification"><span class="td m-active"><i class="material-icons">notifications</i></span></Link>
              </div>
            </div>
            <div class="td">
              <a href="#" id="p-link">
                <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
   
    <div id="main-content">
        <Outlet/>
    </div>
    <div id="device-bar-2"><i class="fab fa-apple"></i></div>
  </main>
  )
}

export default Dashboard
