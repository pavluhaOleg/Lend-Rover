import React, { FC } from 'react'
import em from '../../Legendary-Family/ItemElemFamily/ItemElemFamily.module.css'
import { BsChevronRight } from "react-icons/bs";

interface IItemModelLastChaildProps {
  img: string,
  title: string,
  text: string,
}

const ItemElemModelLastChaild: FC<IItemModelLastChaildProps> = ({ img, title, text }) => {
  return (
    <div className={em.card}>
      <div className={em.block_Img}>
        <img src={img} title="img" />
        <div className={em.hoverImg}></div>
      </div>

      <h4 className={em.title}>{title}</h4>
      <p className={em.text}>{text}</p>

      <div className={em.icon}><BsChevronRight /><span className={em.linkFamily}>узнать больше</span></div>
    </div>
  )
}

export default ItemElemModelLastChaild