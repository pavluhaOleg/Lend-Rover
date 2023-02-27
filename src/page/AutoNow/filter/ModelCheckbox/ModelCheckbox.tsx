import React, { useState } from 'react'
import { CardAutoNow } from '../../../../Infa-arr/InfaArr';
import mchb from './ModelCheckbox.module.css'

type ModelAutoNowType = {
  id: any;
  model: string
}

type ChoiceType = {
  Choice: (elem: string) => void;
  setAgreeToAllTerms: (elem: boolean) => void
}

const ModelCheckbox = ({ Choice, setAgreeToAllTerms }: ChoiceType) => {

  const [arrModel] = useState<ModelAutoNowType[]>(CardAutoNow)

  const table: any = {};     // поиск моделей для навигации
  const ModelNav = arrModel.filter(({ model }) => (!table[model] && (table[model] = 1)));

  return (
    <div className={mchb.wrapper}>
      <h3 className={mchb.title}>модель</h3>
      <ul>{
        ModelNav.map((elem, index) =>
          <label key={index} className={mchb.labelText}>

            <input type="checkbox"
              className={mchb.check}
              onClick={() => Choice(elem.model)}
              onChange={(e) => setAgreeToAllTerms(e.target.checked)}
            />

            <span>{elem.model}</span>
          </label>
        )
      }
      </ul>

    </div>
  )
}

export default ModelCheckbox