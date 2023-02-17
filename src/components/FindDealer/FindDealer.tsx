import React from 'react'
import fd from './FindDealer.module.css'
import img_diler from '../../img/diller.png'
import Cnp from '../FindDealer/cnp/Cnp'

const FindDealer = () => {
  return (
    <div className={fd.wrapper}>
      <div className={fd.block_Img}>
        <img src={img_diler} title="картинка" />
        <div className={fd.block_information}>
          <h2 className={fd.title}>НАЙТИ БЛИЖАЙШЕГО ДИЛЕРА</h2>
          <p className={fd.text}>По вопросам покупки, консультации и поддержки обратитесь в ближайший дилерский центр</p>

          <Cnp textCnp={'найти диллера'} />
        </div>
      </div>
    </div>
  )
}

export default FindDealer