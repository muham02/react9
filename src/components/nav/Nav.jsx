import React from 'react'
import AllUser from '../main/AllUser'
import Users from '../users/Users'
import nav from './Nav.module.scss'
import users from '../../images/users.png'
import { Routes,Route, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
<div>
<nav className={nav.nav}>
 <div className={nav.container}>
  <img className={nav.nav__img} src={users} alt="" />
  <NavLink className={nav.link} to='/'>Home</NavLink>
  <NavLink className={nav.link} to='/users'>Users</NavLink>
 </div>

  </nav>

<Routes>
  <Route path="/"element={<AllUser/>}/>
  <Route path="/users"element={<Users/>}/>
</Routes>
</div>
  )
}

export default Nav