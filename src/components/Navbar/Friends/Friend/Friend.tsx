import React from 'react'
import s from './Friend.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
  id: number
  name: string
}

const Friend: React.FC<PropsType> = props => {
  let path = '/' + props.id

  return (
    <li className={s.item}>
      <NavLink to={path} activeClassName={s.active}>
        <img
          src="http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg"
          alt={`${props.name} ${props.id}`}
        ></img>
        <p>{props.name}</p>
      </NavLink>
    </li>
  )
}

export default Friend
