import React, { FC } from 'react'
import scr from './ScrolDown.module.css'
import { BsArrowDown } from "react-icons/bs";
import { useScrollTo } from 'react-use-window-scroll';

interface IScrolBlock {
  scroll: any
}



const ScrolDown: FC<IScrolBlock> = () => {
  const scrollTo = useScrollTo()


  return (
    <div onClick={() => scrollTo({ top: 700, left: 0, behavior: 'smooth' })} className={scr.cnpScroll}><BsArrowDown /></div>
  )
}

export default ScrolDown