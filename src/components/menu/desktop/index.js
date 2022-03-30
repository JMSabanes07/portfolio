import { DesktopMenuContainer } from './styles'
import { useRouter } from 'next/router'
import { useChangePage } from 'hooks/useChangePage'
import { MdNightlight, MdLightMode } from 'react-icons/md'
import { useTheme } from 'hooks/useTheme'

const DesktopMenu = (params) => {
  const router = useRouter()
  const { goTo } = useChangePage()
  const { theme, setDark, setLight } = useTheme()

  return (
    <DesktopMenuContainer themeActive={theme}>
      <li>
        <button onClick={() => goTo('/')}>Home</button>
        {router.asPath === '/' && <div className="background" />}
      </li>
      <li>
        <button onClick={() => goTo('/projects')}>Projects</button>
        {router.asPath === '/projects' && <div className="background" />}
      </li>
      <li>
        <button onClick={() => goTo('/about')}>About me</button>
        {router.asPath === '/about' && <div className="background" />}
      </li>
      <li>
        <button onClick={() => goTo('/contact')}>Contact</button>
        {router.asPath === '/contact' && <div className="background" />}
      </li>
      <li className="theme-toggle">
        <button className="light" onClick={setLight}>
          <MdLightMode />
        </button>
        <button className="dark" onClick={setDark}>
          <MdNightlight />
        </button>
      </li>
    </DesktopMenuContainer>
  )
}

export default DesktopMenu
