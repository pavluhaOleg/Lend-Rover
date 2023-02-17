/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { FaCarSide } from 'react-icons/fa'
import dbw from './DevelopmentBlockWindow.module.css'
import { arrMenuDevelopment, BlockImgCars, BlockImgDevelopment } from '../../../../Infa-arr/InfaArr'
import { useEffect } from 'react';


interface ICarBlockmg {
  id: number,
  img: string,
  title: string,
  subtitle?: string,
  family?: string,
  model?: string,
  review?: string,
  gallery?: string,
  specifications?: string,
  consumption?: string,
  emissions?: string,
  places?: string,
  tank?: string,
}
interface ICarProps {
  carActive: number
}
const DevelopmentBlockWindow: FC<ICarProps> = ({ carActive }) => {

  const [modelHover, setModelHover] = useState<ICarBlockmg[]>(BlockImgDevelopment)

  useEffect(() => {
    setModelHover(modelHover)
  }, [modelHover])

  return (
    <div className={dbw.blockWindow}>
      {modelHover.map(elem =>
        <div key={elem.id}
          className={carActive === elem.id ? dbw.blockAnimate : dbw.noneBlock}
        >
          <div className={dbw.blockКeview}>
            <div className={dbw.titleImg}>{elem.title}</div>
            <p className={dbw.textImg}>{elem.subtitle}</p>

            <span className={dbw.configCnp}><FaCarSide /><span className={dbw.text}>конфигуратор</span></span>

            <p className={dbw.linkKeviw}><span className={dbw.iconArrow}><BsChevronRight /></span>модель</p>
            <p className={dbw.linkKeviw}><span className={dbw.iconArrow}><BsChevronRight /></span>обзор</p>
            <p className={dbw.linkKeviw}><span className={dbw.iconArrow}><BsChevronRight /></span>галерея</p>
            <p className={dbw.linkKeviw}><span className={dbw.iconArrow}><BsChevronRight /></span>спецификация</p>
          </div>

          {/* блок фото */}
          <div className={dbw.wrapperImg}>
            {/*  фото модели */}
            <div className={dbw.wrapperElemImg}>
              <div className={dbw.blockImg}>
                <img src={elem.img} title="img" />
              </div>

            </div>
          </div>
        </div>
      )
      }
    </div>

  )
}

export default DevelopmentBlockWindow