import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
  id: number
  name: string
}

const DialogItem: React.FC<PropsType> = props => {
  const path = '/dialogs/' + props.id

  return (
    <li className={s.dialog}>
      <img
        src="http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg"
        alt={props.name}
      ></img>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </li>
  )
}

export default DialogItem
