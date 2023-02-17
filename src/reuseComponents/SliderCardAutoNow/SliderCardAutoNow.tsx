import React, { FC, useState } from 'react'
import scan from './SliderCardAutoNow.module.css'
import SliderCnp from './SliderCnp/SliderCnp';

let numCnp = '1';
type SliderCardAutoNowType = {
  img_1: string | undefined
  img_2: string | undefined
  img_3: string | undefined
  img_4: string | undefined
  clickSlider: (e: any) => void
}

const SliderCardAutoNow: FC<SliderCardAutoNowType> = ({ img_1, img_2, img_3, img_4 }) => {
  let [offsetImgNowCar, setOffsetImgNowCar] = useState(0);
  const [cnp] = useState<number[]>([1, 2, 3, 4]);



  const clickSlider = (e: { target: any }) => {
    numCnp = e.target.innerText

    if (numCnp === '1') {
      setOffsetImgNowCar(offsetImgNowCar = 0)
    }
    if (numCnp === '2') {
      setOffsetImgNowCar(offsetImgNowCar = -100)
    }
    if (numCnp === '3') {
      setOffsetImgNowCar(offsetImgNowCar = -200)
    }
    if (numCnp === '4') {
      setOffsetImgNowCar(offsetImgNowCar = -300)
    }

  }

  return (
    <div className={scan.wrapper}>
      <ul className={scan.wrappAllSliderImg} style={{
        left: `${offsetImgNowCar}%`                          // offset - общая длинна слайдера 
      }}>
        <li className={scan.blockImg}>
          <img src={img_1} alt="" />
        </li>
        <li className={scan.blockImg}>
          <img src={img_2} alt="" />
        </li>
        <li className={scan.blockImg}>
          <img src={img_3} alt="" />
        </li>
        <li className={scan.blockImg}>
          <img src={img_4} alt="" />
        </li>
      </ul>
      <SliderCnp clickSlider={clickSlider} numCnp={numCnp} cnp={cnp} />
    </div>
  )
}

export default SliderCardAutoNow