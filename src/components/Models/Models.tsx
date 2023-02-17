import React, { useState } from 'react'
import m from './Models.module.css'
import Title from '../../reuseComponents/Title/Title'
import ItemElemModel from './ItemElemModel/ItemElemModel'

import img_model_1 from '../../img/img_model_1.png'
import img_model_2 from '../../img/img_model_2.png'
import img_model_3 from '../../img/img_model_3.png'
import img_model_4 from '../../img/img_model_4.png'
import img_model_5 from '../../img/img_model_5.png'
import img_model_6 from '../../img/img_model_6.png'
import img_model_7 from '../../img/img_model_7.png'
import img_model_sv from '../../img/img_model_sv.png'
import ItemElemModelLastChaild from './ItemElemModelLastChaild/ItemElemModelLastChaild'


const Models = () => {

  const [elemModels, setElemModels] = useState([
    { id: 1, img: img_model_1, title: 'НОВЫЙ RANGE ROVER', text: 'Непревзойденная роскошь и совершенство.' },
    { id: 2, img: img_model_2, title: 'НОВЫЙ RANGE ROVER SPORT', text: 'Внутренняя страсть, впечатляющий облик, безупречный дизайн.' },
    { id: 3, img: img_model_3, title: 'RANGE ROVER VELAR', text: 'Range Rover в авангардном стиле.' },
    { id: 4, img: img_model_4, title: 'RANGE ROVER EVOQUE', text: 'Время заявить о себе.' },
    { id: 5, img: img_model_5, title: 'НОВЫЙ RANGE ROVER', text: 'Непревзойденная роскошь и совершенство.' },
    { id: 6, img: img_model_6, title: 'DISCOVERY', text: 'Универсальный семиместный внедорожник.' },
    { id: 7, img: img_model_7, title: 'DISCOVERY SPORT', text: 'Непревзойденная роскошь и совершенство.' }
  ])

  const [elemLastChaild, setElemLastChaild] = useState([
    { id: 1, img: img_model_sv, title: 'ПОДРАЗДЕЛЕНИЕ SPECIAL VEHICLE OPERATIONS', text: 'Уникальные автомобили Land Rover, отличающиеся роскошью, высокими характеристиками и непревзойденными возможностями.' },
  ])
  return (
    <div className={m.wrapper}>
      <Title text="МОДЕЛИ" />
      <ul className={m.modulesBlock}>
        {elemModels.map(elem =>

          <ItemElemModel key={elem.id} {...elem} />

        )}

        <li>{
          elemLastChaild.map(elem =>
            <ItemElemModelLastChaild key={elem.id} {...elem} />
          )
        }</li>
      </ul>
    </div>
  )
}

export default Models

