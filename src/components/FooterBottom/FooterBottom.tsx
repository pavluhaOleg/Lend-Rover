import React from 'react'
import fb from './FooterBottom.module.css'

const FooterBottom = () => {
  return (
    <div className={fb.wrapper}>
      <p className={fb.text}><span>&copy;</span> Все права защищены. Jaguar Land Rover Limited, 2022. Компания зарегистрирована по адресу: Abbey Road, Whitley, Coventry CV3 4LF Великобритания. Регистрационный номер: 1672070.</p>
    </div>
  )
}

export default FooterBottom