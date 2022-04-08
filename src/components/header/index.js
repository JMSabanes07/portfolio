import Menu from 'components/menu'
import { HeaderContainer, Logo } from './styles'
import { motion } from 'framer-motion'
import { useScroll } from 'hooks/useScroll'
import DesktopMenu from 'components/menu/desktop'
import { useViewport } from 'hooks/useViewport'

const HeaderContainerMotion = motion(HeaderContainer)

const Header = () => {
  const { onLimit } = useScroll(30)
  const { mediaQuery } = useViewport(1024)

  return (
    <HeaderContainerMotion
      borderVisible={onLimit}
      initial={{
        y: '-100%',
      }}
      animate={{
        y: 0,
        transition: {
          delay: 0.3,
        },
      }}
    >
      <Logo>
        <h3>
          {'<'} JMS {'/>'}
        </h3>
      </Logo>
      {mediaQuery ? <DesktopMenu /> : <Menu />}
    </HeaderContainerMotion>
  )
}

export default Header
