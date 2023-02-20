import { useState } from 'react'
import app from './App.module.css'

import Header from './components/Header/Header'
import Home from './page/Home/Home'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterBottom/FooterBottom'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cars from './page/Cars/Cars'
import AutoNow from './page/AutoNow/AutoNow'
import Brand from './page/Brand/Brand'
import { Context } from './context/Context'
import CarContentModel from './page/Cars/CarContentModel/CarContentModel'
import ElectricsContentModel from './page/Cars/ElectricsContentModel/ElectricsContentModel'
import Development from './page/Cars/Development/Development'

const App = () => {
  const [carsShow, setCarsShow] = useState(false)

  return (
    <Context.Provider value={{ carsShow, setCarsShow }}>

      <div className={app.wrapper}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/cars/*' element={<Cars />}>
            <Route index element={<Navigate to="cars-model" replace />} />
            <Route path="cars-model" element={<CarContentModel />} />
            <Route path="electrics" element={<ElectricsContentModel />} />
            <Route path="development" element={<Development />} />
          </Route>

          <Route path='/car-stock' element={<AutoNow />} />
          <Route path='/brand' element={<Brand />} />
        </Routes>
        <Footer />
        <FooterBottom />
      </div>
    </Context.Provider>
  )
}

export default App