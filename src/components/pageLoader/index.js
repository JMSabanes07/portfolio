import { motion } from 'framer-motion'
import { PageLoaderContainer } from './styles'
import { useLoader } from 'hooks/useLoader'

const PageLoaderMotion = motion(PageLoaderContainer)

const PageLoader = () => {
  const { isVisible, animationLife } = useLoader()

  const left = {
    open: {
      x: '-100%',
      transition: {
        duration: 0.7,
      },
    },
    close: {
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  }
  const right = {
    open: {
      x: '100%',
      transition: {
        duration: 0.7,
      },
    },
    close: {
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <>
      <PageLoaderMotion
        initial={false}
        animate={isVisible ? 'close' : 'open'}
        variants={left}
        position={'left'}
        onAnimationStart={() => animationLife(true)}
        onAnimationComplete={() => animationLife(false)}
      >
        <h1>{'<JMS/>'}</h1>
      </PageLoaderMotion>
      <PageLoaderMotion
        initial={false}
        animate={isVisible ? 'close' : 'open'}
        variants={right}
        position={'right'}
      >
        <h1>{'<JMS/>'}</h1>
      </PageLoaderMotion>
    </>
  )
}

export default PageLoader
