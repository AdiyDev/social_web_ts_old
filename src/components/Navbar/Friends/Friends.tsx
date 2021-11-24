import React from 'react'
import s from './Friends.module.css'
import Friend from './Friend/Friend'
import { friendType } from '../../../redux/navbar-reducer'

type PropsType = {
  navbar: Array<friendType>
}

const Friends: React.FC<PropsType> = props => {
  const friendsElements = props.navbar.map(f => (
    <Friend id={f.id} key={f.id} name={f.name} />
  ))

  return (
    <div className={s.sideBarFriends}>
      <h3>Friends</h3>
      <ul className={s.ul}>{friendsElements}</ul>
    </div>
  )
}

export default Friends
