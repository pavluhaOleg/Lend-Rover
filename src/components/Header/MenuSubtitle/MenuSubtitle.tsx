import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import MenuBlockAutoNow from '../../MenuBlockAutoNow/MenuBlockAutoNow'
import ms from './MenuSubtitle.module.css'

interface ShowSubtitleType {
  showSubtitle: boolean,
  setHideBlockMenu: (h: boolean) => void,
  hideBlockMenu: boolean
}

const MenuSubtitle = ({ showSubtitle, setHideBlockMenu, hideBlockMenu }: ShowSubtitleType) => {

  return (
    <>
      <div className={showSubtitle ? `${ms.wrapper} ${ms.none}` : ms.wrapper}>
        <div className={ms.header}>
          <div className={ms.navigation}
            onClick={() => setHideBlockMenu(!hideBlockMenu)}
          >
            <span>финансирование</span>
            <span className={ms.UpArrow}>{hideBlockMenu ? <BsChevronUp /> : <BsChevronDown />}</span>
          </div>

          <div className={ms.text}>авто в наличии</div>
        </div>
      </div>
      <MenuBlockAutoNow hideBlockMenu={hideBlockMenu} setHideBlockMenu={setHideBlockMenu} />
    </>
  )
}

export default MenuSubtitle