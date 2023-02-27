import React, { useState } from 'react'
import { CardAutoNow } from '../../../Infa-arr/InfaArr'
import ItemCardAutoNow from '../../../reuseComponents/ItemCardAutoNow/ItemCardAutoNow'
import blca from './BlockCard.module.css'

type FilterArrTypeProps = {
  model: any
}


const BlockCard = ({ model }: FilterArrTypeProps) => {

  return (
    <>
      <p className={blca.resultsFound}>найдено результатов: </p>
      <ul className={blca.blockCard}>
        {model.map((elem: any) =>
          <ItemCardAutoNow key={elem.id} {...elem} />
        )}
      </ul>
    </>
  )
}

export default BlockCard