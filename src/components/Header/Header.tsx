import { useEffect, useState } from 'react'
import { ArrHomeNavigation } from '../../Infa-arr/InfaArr'
import h from './Header.module.css'
import Logo from './Logo-header/Logo'
import MenuSubtitle from './MenuSubtitle/MenuSubtitle'
import ItemHomeHeaderNav from './ItemHomeHeaderNav/ItemHomeHeaderNav'
import Search from './search-nav/Search'

type ArrHomeNavigationType = {
  id: number,
  link: string,
  text: string,
}

const Header = () => {

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset

      setVisible(position < moving);
      setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })

  }, [position])

  const [elemNav] = useState<ArrHomeNavigationType[]>(ArrHomeNavigation)
  const [showSubtitle, setShowSubtitle] = useState<boolean>(true)
  const [hideBlockMenu, setHideBlockMenu] = useState<boolean>(false)

  return (
    <div className={visible ? `${h.wrapper} ${h.topheaderHide}` : h.wrapper}>

      <div className={h.blockLeft}>
        <Logo setShowSubtitle={setShowSubtitle} />
        <ul className={h.block}>
          {
            elemNav.map(elem =>
              <ItemHomeHeaderNav key={elem.id} {...elem} setShowSubtitle={setShowSubtitle} setHideBlockMenu={setHideBlockMenu} />
            )}
        </ul>
      </div>
      <Search />
      <MenuSubtitle showSubtitle={showSubtitle} hideBlockMenu={hideBlockMenu} setHideBlockMenu={setHideBlockMenu} visible={visible} />
    </div>
  )
}

export default Header