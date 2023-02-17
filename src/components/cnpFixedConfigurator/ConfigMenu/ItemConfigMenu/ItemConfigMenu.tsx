import React, { FC, useContext } from 'react'
import icm from './ItemConfigMenu.module.css'

interface IarrMenuProps {
  text: string,
  icon: string,
}

const ItemConfigMenu: FC<IarrMenuProps> = ({ text, icon }) => {

  return (
    <li className={icm.elem}>
      <span className={icm.icon}><i className={icon}></i></span>{text}
    </li>
  )
}

export default ItemConfigMenu