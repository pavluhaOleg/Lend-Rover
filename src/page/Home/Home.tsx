import React from 'react'
import Slider from '../../components/Slider/Slidar'
import Configurator from '../../components/Configurator/Configurator'
import h from './Home.module.css'
import LegendaryFamily from '../../components/Legendary-Family/LegendaryFamily'
import Models from '../../components/Models/Models'
import FindDealer from '../../components/FindDealer/FindDealer'
import Information from '../../components/Information/Information'
import NavigationHomeHeader from '../../components/NavigationHomeHeader/NavigationHomeBottom'


const Home = () => {
  window.scrollTo(0, 0);

  return (

    <div className={h.wrapper}>
      <Slider />

      <Configurator />
      <LegendaryFamily />
      <Models />
      <FindDealer />
      <Information />
      <NavigationHomeHeader />
    </div>
  )
}

export default Home