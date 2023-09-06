import React from 'react'

const ProfileUpper = () => {
  return (
    <div id="profile-upper">
      <div id="profile-banner-image">
        <img src="https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg" alt="Banner image"/>
      </div>
      <div id="profile-d">
        <div id="profile-pic">
          <img src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"/>
        </div>
        <div id="u-name">Himalaya Singh</div>
        <div class="tb" id="m-btns">
          <div class="td">
            <div class="m-btn"><i class="material-icons">format_list_bulleted</i><span>Activity log</span></div>
          </div>
          <div class="td">
            <div class="m-btn"><i class="material-icons">lock</i><span>Privacy</span></div>
          </div>
        </div>
        <div id="edit-profile"><i class="material-icons">camera_alt</i></div>
      </div>
      <div id="black-grd"></div>
    </div>
  )
}

export default ProfileUpper
