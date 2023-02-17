import React from 'react'
import { BrandFooter } from './BrandFooter/BrandFooter'
import f from './Footer.module.css'
import InformationFooter from './InformationFooter/InformationFooter'
import QuickLinks from './QuickLinks/QuickLinks'
import SocialNetwork from './socialNetwork/SocialNetwork'

const Footer = () => {
  return (
    <div className={f.wrapper}>
      <QuickLinks />
      <InformationFooter />
      <BrandFooter />
      <SocialNetwork />
    </div>
  )
}

export default Footer