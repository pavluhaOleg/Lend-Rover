import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import icf from './ItemDynamicNavigationBlock.module.css'

interface IItemCarNav {
  link: string,
  text: string,
}

const ItemCarNav: FC<IItemCarNav> = ({ link, text }) => {

  // поднятие страницы вверх
  const lift_Up = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <li className={icf.elem}>
      <NavLink to={link} className={({ isActive }) => isActive ? `${icf.active} ${icf.elem}` : `${icf.elem}`}
        onClick={lift_Up}
      >{text}</NavLink>
    </li>
  )
}

export default ItemCarNav