import { DesktopMenuContainer } from './styles'
import { useRouter } from 'next/router'
import { useChangePage } from 'hooks/useChangePage'
import { motion } from 'framer-motion'
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
        {router.asPath === '/' && (
          <motion.div className="background" layoutId="link" />
        )}
      </li>
      <li>
        <button onClick={() => goTo('/projects')}>Projects</button>
        {router.asPath === '/projects' && (
          <motion.div className="background" layoutId="link" />
        )}
      </li>
      <li>
        <button onClick={() => goTo('/about')}>About me</button>
        {router.asPath === '/about' && (
          <motion.div className="background" layoutId="link" />
        )}
      </li>
      <li>
        <button onClick={() => goTo('/contact')}>Contact</button>
        {router.asPath === '/contact' && (
          <motion.div className="background" layoutId="link" />
        )}
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
