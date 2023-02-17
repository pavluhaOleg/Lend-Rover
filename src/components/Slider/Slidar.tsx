import { useState, FC} from 'react'

import s from './Slider.module.css';

import Slider_Item from './Slider-Item/Slider-Item'

import {sliderArr} from'../../Infa-arr/InfaArr';
import ScrolDown from './ScrolDown/ScrolDown';
import CnpFixedConfigurator from '../cnpFixedConfigurator/cnpFixedConfigurator';

interface ILineSlider {
  id: number,
  img: string,
  title: string,
  text: string,
  anchor: string | number
}



const Slider: FC = () => {

  const [imgSlider] = useState<ILineSlider[]>(sliderArr);  // arr Slider

  let [offset, setOffset] = useState(0);  // длинна слайдера

  let [marcerNum, setMarcerNum] = useState(1);  // номер маркера

  function Timer() {        // моторчик для Timeout
    if (offset >= -300) {
      setMarcerNum(marcerNum + 1)   // увеличивает маркер на 1
      setOffset(offset += -100)     // увеличивает длинну слайдера 
    }
    if (offset === -300) {
      setMarcerNum(marcerNum = 1)   // сброс маркера 
      setOffset(0);                // сброс длинны
    }
  }

  const timer = setTimeout(Timer, 6000)

  const moveNext = () => {         // кнопка вперёд
    setMarcerNum(marcerNum + 1)   // увеличивает маркер на 1
    setOffset(offset += -100)    // увеличивает длинну слайдера 
    clearTimeout(timer)         // удатение setTimeout
  }
  const movePrev = () => {         // кнопка назад
    setMarcerNum(marcerNum - 1)  // уменьшает маркер на 1
    setOffset(offset += 100)    // уменьшает длинну слайдера
    clearTimeout(timer)       // удатение setTimeout
  }

  return (
    <div className={s.wrapper}>  
      <CnpFixedConfigurator />

      <ul className={s.slider_line} style={{
        left: `${offset}%`                          // offset - общая длинна слайдера 
      }}>

        {imgSlider.map(elem =>                       // перебор массив Слайдер
          <li key={elem.id}>
            <Slider_Item marcerNum={marcerNum} {...elem} />
          </li>
        )}
      </ul>


      {/* Маркеры */}

      <ul className={s.marcerBlock}>

        {imgSlider.map(elem =>
          <div key={elem.id} className={s.wrappMarcer}>
            <div
              className={marcerNum === elem.id        // выбор активного маркера
                ?
                `${s.marcerElem} ${s.active}` : `${s.marcerElem}`} key={elem.id}>

            </div>
          </div>
        )}

      </ul>



      <div className={offset === -200 ? '' : s.next}  // правая стрелка
        onClick={moveNext}></div>

      <div className={offset === 0 ? '' : s.prev}    // левая стрелка
        onClick={movePrev}></div>

      <ScrolDown scroll={undefined} />

    </div >
  )
}

export default Slider


