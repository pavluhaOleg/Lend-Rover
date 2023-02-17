import React from 'react'
import con from './Configurator.module.css'
import img_config from '../../img/config.png'
import Cnp_config from './Cnp_cconfig/Cnp_config'

const Configurator = ({}) => {
  return (
    <div className={con.wrapper}>
      <div className={con.block_text}>
        <h3>ОДИН КЛИК К ВАШЕМУ НОВОМУ DEFENDER</h3>
        <Cnp_config textCnp='конфигуратор' />
      </div>
      <div className={con.block_Img}>
        <img src={img_config} title="img" />
      </div>
    </div>
  )
}

export default Configurator