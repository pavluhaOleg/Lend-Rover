import React, { useEffect, useState } from 'react'
import { CardAutoNow } from '../../Infa-arr/InfaArr';
import anow from './AutoNow.module.css'
import BlockCard from './BlockCard/BlockCard';
import Filter from './filter/Filter';

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
  model: string
}



const AutoNow = () => {
  const [arrResult, setArrResult] = useState<CardAutoNowType[]>([])
  const [arrCard, setArrCard] = useState<CardAutoNowType[]>(CardAutoNow)
  const [elemModel, setElemModel] = useState<string>('')
  const [elemId, setElemId] = useState<number | null>(null)
  const [agreeToAllTerms, setAgreeToAllTerms] = useState<boolean>(false);


  window.scrollTo(0, 0);
  // РАБОТА С МОДЕЛЯМИ

  useEffect(() => {
    Checkbox(agreeToAllTerms, elemModel, arrCard)

  }, [arrCard, agreeToAllTerms, elemModel])

  function Checkbox(agreeToAllTerms: boolean, elemModel: string, arrCard: any) {

    if (agreeToAllTerms && elemModel === 'Defender') {   // выбор моделей
      return setArrResult([...arrResult, ...arrCard.filter((elem: { model: string }) => elem.model === elemModel)])
    }

    else if (!agreeToAllTerms && elemModel === 'Defender') {
      return setArrResult([...arrResult.filter((elem: { model: string }) => elem.model !== elemModel)])
    }

    if (agreeToAllTerms && elemModel === 'Range Rover Sport') {
      return setArrResult([...arrResult, ...arrCard.filter((elem: { model: string }) => elem.model === elemModel)])
    }

    else if (!agreeToAllTerms && elemModel === 'Range Rover Sport') {
      return setArrResult([...arrResult.filter((elem: { model: string }) => elem.model !== elemModel)])
    }

    if (agreeToAllTerms && elemModel === 'Range Rover Velar') {
      return setArrResult([...arrResult, ...arrCard.filter((elem: { model: string }) => elem.model === elemModel)])
    }

    else if (!agreeToAllTerms && elemModel === 'Range Rover Velar') {
      return setArrResult([...arrResult.filter((elem: { model: string }) => elem.model !== elemModel)])
    }

    if (agreeToAllTerms && elemModel === 'Range Rover') {
      return setArrResult([...arrResult, ...arrCard.filter((elem: { model: string }) => elem.model === elemModel)])
    }

    else if (!agreeToAllTerms && elemModel === 'Range Rover') {
      return setArrResult([...arrResult.filter((elem: { model: string }) => elem.model !== elemModel)])
    }

    if (agreeToAllTerms && elemModel === 'Range Rover Evoque') {
      return setArrResult([...arrResult, ...arrCard.filter((elem: { model: string }) => elem.model === elemModel)])
    }

    else if (!agreeToAllTerms && elemModel === 'Range Rover Evoque') {
      return setArrResult([...arrResult.filter((elem: { model: string }) => elem.model !== elemModel)])
    }



    if (agreeToAllTerms && elemModel === 'Discovery Sport') {
      return setArrResult([...arrResult, ...arrCard.filter((elem: { model: string }) => elem.model === elemModel)])
    }



    else if (!agreeToAllTerms && elemModel === 'Discovery Sport') {
      return setArrResult([...arrResult.filter((elem: { model: string }) => elem.model !== elemModel)])
    }

    setArrResult([...arrResult])

  }

  const Choice = (elem: string) => {    // выбор моделей по клику
    setElemModel(elem)
  }


  return (

    <div className={anow.wrapper}>
      <h1 className={anow.title}>авто в наличии</h1>
      <div className={anow.content}>
        <Filter Choice={Choice} setAgreeToAllTerms={setAgreeToAllTerms} />
        <BlockCard model={arrResult} />
      </div>
    </div>
  )
}

export default AutoNow