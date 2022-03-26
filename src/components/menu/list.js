import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ListContainer, Item } from './style'
import { useMenu } from 'hooks/useMenu'
import { motion } from 'framer-motion'
import ColorToggle from './colorToggle'
import { useChangePage } from 'hooks/useChangePage'

const ListContainerMotion = motion(ListContainer)
const ItemMotion = motion(Item)

const List = () => {
  const { goTo } = useChangePage()
  const router = useRouter()
  const [height, setHeight] = useState()
  const menu = useMenu()

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    menu.deactivate()
  }, [router])

  const variants = {
    open: {
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 35px) 35px)`,
      transition: {
        // type: 'spring',
        stiffness: 30,
        restDelta: 2,
        staggerChildren: 0.07,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
    closed: {
      clipPath: `circle(22px at calc(100% - 35px) 35px)`,
      transition: {
        // type: 'spring',
        stiffness: 400,
        damping: 40,
        when: 'afterChildren',
        staggerChildren: 0.07,
        duration: 0.5,
      },
    },
  }

  const childrenVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      },
    },
    closed: {
      x: '15%',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  }

  const toggleColorVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
      },
    },
    closed: {
      y: '50%',
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  }

  return (
    <ListContainerMotion
      animate={menu.isOpen ? 'open' : 'closed'}
      variants={variants}
      initial={false}
    >
      <ItemMotion
        active={router.asPath === '/'}
        variants={childrenVariants}
        delayOrder={1}
      >
        <button onClick={() => goTo('/')}>Home</button>
        {router.asPath === '/' && (
          <motion.div className="background" layoutId="link" />
        )}
      </ItemMotion>
      <ItemMotion
        active={router.asPath === '/projects'}
        variants={childrenVariants}
        delayOrder={2}
      >
        <button onClick={() => goTo('/projects')}>Projects</button>
        {router.asPath === '/projects' && (
          <motion.div className="background" layoutId="link" />
        )}
      </ItemMotion>
      <ItemMotion
        active={router.asPath === '/about'}
        variants={childrenVariants}
        delayOrder={3}
      >
        <button onClick={() => goTo('/about')}>About me</button>
        {router.asPath === '/about' && (
          <motion.div className="background" layoutId="link" />
        )}
      </ItemMotion>
      <ItemMotion
        active={router.asPath === '/contact'}
        variants={childrenVariants}
        delayOrder={4}
      >
        <button onClick={() => goTo('/contact')}>Contact</button>
        {router.asPath === '/contact' && (
          <motion.div className="background" layoutId="link" />
        )}
      </ItemMotion>
      <ColorToggle variants={toggleColorVariants} delayOrder={5} />
    </ListContainerMotion>
  )
}

export default List
