/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { FaCarSide } from 'react-icons/fa'
import bw from './ElectricsBlockWindow.module.css'
import { BlockImgElectrics } from '../../../../Infa-arr/InfaArr'
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
const ElectricsBlockWindow: FC<ICarProps> = ({ carActive }) => {

  const [modelHover, setModelHover] = useState<ICarBlockmg[]>(BlockImgElectrics)

  useEffect(() => { 
    setModelHover(modelHover)
  }, [modelHover])

  return (
    <div className={bw.blockWindow}>
      {modelHover.map(elem =>
        <div key={elem.id}
          className={carActive === elem.id ? bw.blockAnimate : bw.noneBlock}
        >
          <div className={bw.blockКeview}>
            <div className={bw.titleImg}>{elem.title}</div>
            <p className={bw.textImg}>{elem.subtitle}</p>

            <span className={bw.configCnp}><FaCarSide /><span className={bw.text}>конфигуратор</span></span>

            <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>модель</p>
            <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>обзор</p>
            <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>галерея</p>
            <p className={bw.linkKeviw}><span className={bw.iconArrow}><BsChevronRight /></span>спецификация</p>

          </div>

          {/* блок фото */}
          <div className={bw.wrapperImg}>
            {/*  фото модели */}
            <div className={bw.wrapperElemImg}>
              <div className={bw.blockImg}>
                <img src={elem.img} title="img" />

                <ul className={bw.blockInformationImg}>
                  <li className={bw.elemInformation}>От {elem.consumption} л/100 км</li>
                  <li className={bw.elemInformation}>От {elem.emissions} г/км</li>
                  <li className={bw.elemInformation}>{elem.places} мест </li>
                  <li className={bw.elemInformation}>{elem.tank} ЛИТРЫ</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      )
      }
    </div>

  )
}

export default ElectricsBlockWindow