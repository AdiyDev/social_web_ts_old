import React from 'react'
import s from './Navbar.module.css'
import { NavLink, Route } from 'react-router-dom'
import FriendsContainer from './Friends/FriendsContainer'

const Navbar: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.ul}>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" activeClassName={s.active}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/users" activeClassName={s.active}>
            Users
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </li>
      </ul>
      <Route path="" render={() => <FriendsContainer />} />
    </nav>
  )
}

export default Navbar
