import React, { FC } from 'react'
import ifu from '../ItemFooterUl/ItemFooterUl.module.css'

interface ItemFooterUlProps {
  elem: string,
}

const ItemFooterUl: FC<ItemFooterUlProps> = ({ elem }) => {
  return (
      <li className={ifu.text}>{elem}</li>
  )
}

export default ItemFooterUl