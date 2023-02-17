import React, { FC } from 'react'
import em from './ItemElemModel.module.css'
import { BsChevronRight } from "react-icons/bs";


interface IItemElemModel {
  img: string,
  title: string,
  text: string,
}

const ItemElemModel: FC<IItemElemModel> = ({ img, title, text }) => {
  return (
    <li className={em.card}>
      <div className={em.block_Img}>
        <img src={img} alt="" />
        <div className={em.hoverImg}></div>
      </div>

      <h4 className={em.title}>{title}</h4>
      <p className={em.text}>{text}</p>
      
      <div className={em.icon}><BsChevronRight /><span className={em.linkFamily}>обзор</span></div>
      <div className={em.icon}><BsChevronRight /><span className={em.linkFamily}>конфигуратор</span></div>
    </li>
  )
}

export default ItemElemModel