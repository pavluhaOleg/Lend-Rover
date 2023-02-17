import React, { FC } from 'react'
import t from './Title.module.css'

interface ITitle {
  text: string
}

const Title: FC<ITitle> = ({ text }) => {
  return (
    <div className={t.block}>
      <h1>{text}</h1>
    </div>

  )
}

export default Title