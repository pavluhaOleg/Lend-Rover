import React, { useState, FC } from 'react'
import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import cfb from './DynamicNavigationBlock.module.css'
import ItemCarNav from './ItemDynamicNavigationBlock/ItemDynamicNavigationBlock'

interface ICarsNav {
  id: number,
  link: string,
  text: string,
}

interface ICarsProps {
  setCarsShow: any;
}

const DynamicNavigationBlock: FC<ICarsProps> = ({ setCarsShow }) => {
  const [toogleNav, setToggleNav] = useState(true)

  const [elemCars] = useState<ICarsNav[]>([     // массив навигация
    { id: 1, text: 'автомобили', link: 'cars-model' },
    { id: 2, text: 'электрический', link: 'electrics'},
    { id: 3, text: 'подразделение разработки ексклюзивных автомобилей', link: 'development' },
  ])

  const hideNavigationCars = () => {    //Событие - спрятать навигацию, кнопка " X "
    setCarsShow(false);                 // убрать динамическую стр. Car
    setToggleNav(!toogleNav);           // убрать навигацию
  }

  return (                 // навигация
    <div className={toogleNav ? `${cfb.navBlock} ${cfb.active}` : cfb.navBlock}>
      <ul className={cfb.navMenu}>
        {elemCars.map(elem =>
          <ItemCarNav key={elem.id} {...elem} /> // елемент навигации
        )
        }
      </ul>

      <Link to="/">
        <div
          onClick={hideNavigationCars}  // кнопка " Х ", спрятать навигацию 
          className={cfb.cnpHide}><BsXLg /></div>
      </Link>
    </div>
  )
}

export default DynamicNavigationBlock