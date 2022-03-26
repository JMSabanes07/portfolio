import { ColorToggleContainer, ToggleButton } from './style'
import { MdNightlight, MdLightMode } from 'react-icons/md'
import { useTheme } from 'hooks/useTheme'
import { motion } from 'framer-motion'

const ColorToggleContainerMotion = motion(ColorToggleContainer)
const ToggleButtonMotion = motion(ToggleButton)

const ColorToggle = (props) => {
  const { theme, setDark, setLight } = useTheme()

  return (
    <ColorToggleContainerMotion {...props}>
      <ToggleButtonMotion
        active={theme === 'light'}
        onClick={setLight}
        whileTap={{ scale: 0.7 }}
      >
        <MdLightMode />
      </ToggleButtonMotion>
      <ToggleButtonMotion
        active={theme === 'dark'}
        onClick={setDark}
        whileTap={{ scale: 0.7 }}
      >
        <MdNightlight />
      </ToggleButtonMotion>
    </ColorToggleContainerMotion>
  )
}

export default ColorToggle
