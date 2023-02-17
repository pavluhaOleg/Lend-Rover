import React, { FC } from 'react'
import inh from './ItemNavigationHomeBottom.module.css'
import { BsChevronRight } from "react-icons/bs";

interface IItemNavigationHomeBottomProps {
  id: number,
  icon: string,
  text: string,
  link: string,
}

const ItemNavigationHomeBottom: FC<IItemNavigationHomeBottomProps> = ({ icon, text, link }) => {
  return (
    <li className={inh.card}>
      <div className={inh.icon}><i className={icon}></i></div>
      <div className={inh.linkContiner}><><BsChevronRight /></><h2 className={inh.link}>{link}</h2></div>
      <p className={inh.text}>{text}</p>
    </li>
  )
}

export default ItemNavigationHomeBottom