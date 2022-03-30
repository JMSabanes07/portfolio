import Head from 'next/head'
import Layout from 'components/layout'
import { PageContainer } from 'styles/pages/container'
import { CoverPage } from 'styles/pages/home'
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion'
import { useChangePage } from 'hooks/useChangePage'
import { Button } from 'styles/components/button'
import SvgPortada from 'components/svg'
import { useViewport } from 'hooks/useViewport'

const CoverPageMotion = motion(CoverPage)
const ButtonMotion = motion(Button)

const Home = () => {
  const { goTo } = useChangePage()
  const { mediaQuery } = useViewport(768)
  const variants = {
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
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
  return (
    <PageContainer>
      <Head>
        <title>Home - JMSabanes</title>
      </Head>
      <CoverPageMotion initial="hidden" whileInView="show" variants={variants}>
        <section className="desc">
          <p>Hi! i&#39;m</p>
          <TypeAnimation
            cursor={true}
            sequence={['Juan Manuel Sabanes', 2000]}
            wrapper="h1"
          />
          <TypeAnimation
            cursor={true}
            sequence={['Frontend Developer', 1000]}
            wrapper="h2"
          />
          <motion.p variants={childrenVariants}>
            I design, build and deploy the interfaces of your web apps
          </motion.p>
          {mediaQuery && (
            <ButtonMotion
              variants={childrenVariants}
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => goTo('/contact')}
            >
              {`<Get in touch />`}
            </ButtonMotion>
          )}
        </section>
        <section className="image-container">
          <SvgPortada />
        </section>
        <section className="button-container">
          {!mediaQuery && (
            <ButtonMotion
              variants={childrenVariants}
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => goTo('/contact')}
            >
              {`<Get in touch />`}
            </ButtonMotion>
          )}
        </section>
      </CoverPageMotion>
    </PageContainer>
  )
}

Home.Layout = Layout

export default Home
