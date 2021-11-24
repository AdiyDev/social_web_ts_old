import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsType = {
  logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = props => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPcCvhIcUpVMqNdX31gJU90TGEO2YZBxWPuvuiSMIwJaJ8LyHJqwL7wW32hX_2_H9kCU&usqp=CAU"
        alt=""
      ></img>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
