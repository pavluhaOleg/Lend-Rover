import React from 'react'
import s from './Search.module.css'

import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className={s.block}>
      <BsSearch className={s.styleEl} />
    </div>
  )
}

export default Search