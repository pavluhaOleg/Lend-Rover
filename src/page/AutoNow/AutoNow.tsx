import React from 'react'
import anow from './AutoNow.module.css'
import BlockCard from './BlockCard/BlockCard';
import Filter from './filter/Filter';

const AutoNow = () => {

  window.scrollTo(0, 0);

  return (
    <div className={anow.wrapper}>
      <h1 className={anow.title}>авто в наличии</h1>
      <div className={anow.content}>
        <Filter />
        <BlockCard />
      </div>
    </div>
  )
}

export default AutoNow