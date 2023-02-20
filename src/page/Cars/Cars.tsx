import { useContext } from 'react'
import DynamicNavigationBlock from '../../components/CarNavBlok/DynamicNavigationBlock'
import c from './Cars.module.css'
import { Context } from '../../context/Context'
import { Outlet } from 'react-router-dom'


const Cars = () => {
  const { setCarsShow } = useContext(Context)


  window.scrollTo(0, 0);
  return (

    <div className={c.wrapper}>
      <div className={c.wrappAnimateBlock}>
        <DynamicNavigationBlock setCarsShow={setCarsShow} />
        <Outlet />
      </div>

    </div>
  )
}

export default Cars