import React, { useState } from 'react'
import { CardAutoNow } from '../../../Infa-arr/InfaArr'
import ItemCardAutoNow from '../../../reuseComponents/ItemCardAutoNow/ItemCardAutoNow'
import blca from './BlockCard.module.css'

type CardAutoNowType = {
  id: number,
  title: string,
  volume: string,
  pack: string,
  fuel: string,
  release: string,
  kpp: string,
  price: string,
  availability: number,
  img?: string,
  img_1?: string | undefined
  img_2?: string | undefined
  img_3?: string | undefined
  img_4?: string | undefined

}



const BlockCard = () => {
  const [card] = useState<CardAutoNowType[]>(CardAutoNow)

  return (
    <>
      <p className={blca.resultsFound}>найдено результатов: </p>
      <ul className={blca.blockCard}>
        {card.map(elem =>
          <ItemCardAutoNow key={elem.id} {...elem} />
        )}
      </ul>
    </>
  )
}

export default BlockCard