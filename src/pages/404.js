import { Container404 } from 'styles/pages/404'
import Layout from 'components/layout'
import { motion } from 'framer-motion'

const Container404Motion = motion(Container404)

const variants = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const childrenVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  hidden: {
    y: '50%',
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
}

const Custom404 = () => {
  return (
    <Container404Motion initial="hidden" whileInView="show" variants={variants}>
      <motion.h1 variants={childrenVariants}>{`< Error 404 />`}</motion.h1>
      <motion.h2 variants={childrenVariants}>
        Sorry, this page is not available.
      </motion.h2>
    </Container404Motion>
  )
}

Custom404.Layout = Layout

export default Custom404
