import { BurgerContainer } from './style'
import { useMenu } from 'hooks/useMenu'
import { motion } from 'framer-motion'

const BurgerContainerMotion = motion(BurgerContainer)

const Burger = () => {
  const menu = useMenu()

  const distance = 5.5

  const topline = {
    open: {
      y: [0, distance, distance],
      rotate: [0, 0, 45],
    },
    closed: {
      y: [distance, distance, 0],
      rotate: [45, 0, 0],
    },
  }
  const midline = {
    open: {
      rotate: [0, 0, -45],
      opacity: [1, 1, 0],
    },
    closed: {
      rotate: [-45, 0, 0],
      opacity: [0, 0, 1],
    },
  }
  const botline = {
    open: {
      y: [0, -distance, -distance],
      rotate: [0, 0, -45],
    },
    closed: {
      y: [-distance, -distance, 0],
      rotate: [-45, 0, 0],
    },
  }

  return (
    <BurgerContainerMotion
      animate={menu.isOpen ? 'open' : 'closed'}
      initial={false}
      onClick={menu.toggle}
    >
      <div className="container">
        <motion.div variants={topline} className="topline"></motion.div>
        <motion.div variants={midline} className="midline"></motion.div>
        <motion.div variants={botline} className="botline"></motion.div>
      </div>
    </BurgerContainerMotion>
  )
}

export default Burger
