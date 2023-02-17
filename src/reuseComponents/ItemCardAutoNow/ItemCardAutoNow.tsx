import React, { FC } from 'react'
import { BsCalendarWeek, BsPlusCircle, BsGear, BsGem } from 'react-icons/bs'
import { RiDoorOpenFill } from "react-icons/ri";
import SliderCardAutoNow from '../SliderCardAutoNow/SliderCardAutoNow'
import icn from './ItemCardAutoNow.module.css'

type CardAutoNowType = {
  id: number,
  title: string,
  volume: string,
  pack: string,
  fuel: string,
  release: any,
  kpp: string,
  price: string,
  availability: number,
  img_1?: string | undefined
  img_2?: string | undefined
  img_3?: string | undefined
  img_4?: string | undefined

}

const ItemCardAutoNow: FC<CardAutoNowType> = ({ img_1, img_2, img_3, img_4, title, fuel, kpp, pack, release, price, volume, availability }) => {
  return (
    <li className={icn.wrapper}>
      <SliderCardAutoNow img_1={img_1} img_2={img_2} img_3={img_3} img_4={img_4} clickSlider={function (e: string): void {
        throw new Error('Function not implemented.');
      } } />
      <div className={icn.title}>{title}</div>
      <div className={icn.font}><span className={icn.icon}><BsGear /></span>{volume} л.</div>
      <div className={icn.font}><span className={icn.icon}><BsGem /></span>{pack}</div>
      <div className={icn.font}><span className={icn.icon}><RiDoorOpenFill /></span>{fuel}</div>
      <div className={icn.font}><span className={icn.icon}><BsCalendarWeek /></span>{release}</div>
      <div className={icn.font}><span className={icn.icon}><BsPlusCircle /></span>{kpp}</div>
      <div className={icn.blockPrice}><div className={icn.textPrice}>ориентировочная цена от: </div><span className={icn.price}>{price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</span></div>

      <div className={icn.availability}>{availability}<span>авто в наличии</span></div>

    </li>
  )
}

export default ItemCardAutoNow