import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = props => {
  return (
    <div className={s.profileWrapper}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
