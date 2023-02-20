import { useState, FC, useEffect } from 'react'
import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CarVav } from '../../Infa-arr/InfaArr';
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
  const [elemCars] = useState<ICarsNav[]>(CarVav)

  const hideNavigationCars = () => {    //Событие - спрятать навигацию, кнопка " X "
    setCarsShow(false);                 // убрать динамическую стр. Car
    setToggleNav(!toogleNav);           // убрать навигацию
  }

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset

      setVisible(position > moving);
      setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })

  }, [position])


  return (                 // навигация
    <div className={visible ? `${cfb.navBlock} ${cfb.active}` : `${cfb.top0} ${cfb.navBlock}`}>
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