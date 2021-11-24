import React from 'react'
import s from './Post.module.css'

type PropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PropsType> = props => {
  return (
    <li className={s.item}>
      <img
        src="http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg"
        alt=""
      ></img>
      {props.message}
      <span>like </span>
      {props.likesCount}
    </li>
  )
}

export default Post
