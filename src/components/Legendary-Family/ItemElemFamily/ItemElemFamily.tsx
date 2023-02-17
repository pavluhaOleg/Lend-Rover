import React, { FC, ReactNode } from 'react'
import ef from './ItemElemFamily.module.css'
import { BsChevronRight } from "react-icons/bs";

interface ItemElemFamilyProps {
  img: string,
  title: string,
  text: string,
  children: ReactNode
}

const ItemElemFamily: FC<ItemElemFamilyProps> = ({ img, title, text }) => {
  return (
    <li className={ef.card}>
      <div className={ef.block_Img}>
        <img src={img} title={'Картинка'} />
      </div>

      <h4 className={ef.title}>{title}</h4>
      <p className={ef.text}>{text}</p>
      <span className={ef.icon}><BsChevronRight /><span className={ef.linkFamily}>ПОЗНАКОМИТЬСЯ С СЕМЕЙСТВОМ</span></span>
    </li>
  )
}

export default ItemElemFamily