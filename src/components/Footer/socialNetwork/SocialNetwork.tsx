import React, { useState } from 'react'
import ItemFooterUl from '../ItemFooterUl/ItemFooterUl'
import sn from './SocialNetwork.module.css'

const SocialNetwork = () => {
  const [arrSocial, setArrSocial] = useState(['ВКОНТАКТЕ', ' YOUTUBE'])

  return (
    <ul className={sn.block}>
      <div className={sn.title}>ПОДПИСЫВАЙТЕСЬ</div>
      {
        arrSocial.map(ul_3 =>
          <ItemFooterUl key={ul_3.length} elem={ul_3} />
        )
      }

      <div className={sn.linkVK}></div>
      <div className={sn.linkFaceboock}></div>


    </ul>
  )
}

export default SocialNetwork