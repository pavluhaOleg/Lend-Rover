import { useState } from 'react'
import { ArrHomeNavigation } from '../../Infa-arr/InfaArr'
import h from './Header.module.css'
import Logo from './Logo-header/Logo'
import MenuSubtitle from './MenuSubtitle/MenuSubtitle'
import ItemHomeHeaderNav from './ItemHomeHeaderNav/ItemHomeHeaderNav'
// import Navigation from './Nav-header/Navigation'
import Search from './search-nav/Search'

type ArrHomeNavigationType = {
  id: number,
  link: string,
  text: string
}

const Header = () => {
  const [elemNav] = useState<ArrHomeNavigationType[]>(ArrHomeNavigation)
  const [showSubtitle, setShowSubtitle] = useState<boolean>(true)
  const [hideBlockMenu, setHideBlockMenu] = useState<boolean>(true)

  return (
    <div className={h.wrapper}>

      <div className={h.blockLeft}>
        <Logo />
        <ul className={h.block}>
          {
            elemNav.map(elem =>
              <ItemHomeHeaderNav key={elem.id} {...elem} setShowSubtitle={setShowSubtitle} setHideBlockMenu={setHideBlockMenu} />
            )}
        </ul>
      </div>

      <Search />

      <MenuSubtitle showSubtitle={showSubtitle} hideBlockMenu={hideBlockMenu} setHideBlockMenu={ setHideBlockMenu} />
    </div>
  )
}

export default Header