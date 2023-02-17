import React, { FC } from 'react'
import ii from './ItemInformation.module.css'
import { BsChevronRight } from "react-icons/bs";

interface IItemInformationProps {
  title: string,
  text: string,
}

const ItemInformation: FC<IItemInformationProps> = ({ title, text}) => {
  return (
    <li className={ii.block}>
      <h4 className={ii.title}>{title}</h4>
      <div className={ii.icon}><BsChevronRight /><span className={ii.link}>обзор</span></div>
    </li>
  )
}

export default ItemInformation