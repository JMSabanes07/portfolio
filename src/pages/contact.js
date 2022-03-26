import Layout from 'components/layout'
import { motion } from 'framer-motion'
import { Title, Desc } from 'styles/pages/container'
import { PageContainerExtend, Socials } from 'styles/pages/contact'
import { Button } from 'styles/components/button'
import { SiInstagram, SiLinkedin, SiGithub, SiTelegram } from 'react-icons/si'

const PageContainerMotion = motion(PageContainerExtend)
const ButtonMotion = motion(Button)
const SocialsMotion = motion(Socials)
const TitleMotion = motion(Title)
const DescMotion = motion(Desc)

const Projects = (params) => {
  const mailTo = () => {
    location.href = `mailto:${process.env.MAIL}`
  }

  const variants = {
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.2,
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

  const socialVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const socialChildren = {
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
    <PageContainerMotion
      initial="hidden"
      whileInView="show"
      variants={variants}
    >
      <TitleMotion variants={childrenVariants}>
        Get In Touch
        <motion.div className="bar" />
      </TitleMotion>
      <DescMotion variants={childrenVariants} textAlign="justify">
        Even though I&#39;m not always looking for new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi,
        I&#39;ll do my best to answer you!
      </DescMotion>
      <ButtonMotion
        variants={childrenVariants}
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.05 }}
        onClick={mailTo}
      >{`<Say Hi!/>`}</ButtonMotion>
      <SocialsMotion whileInView="show" variants={socialVariants}>
        <motion.a
          variants={socialChildren}
          href="https://www.instagram.com/jmsabanes/"
          target="_blank"
          className="recomended"
          rel="noreferrer"
        >
          <motion.div whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.05 }}>
            <SiInstagram />
          </motion.div>
          <span>Recomended</span>
        </motion.a>
        <motion.a
          variants={socialChildren}
          href="https://www.linkedin.com/in/juan-manuel-saban%C3%A9s-2a4261169/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.05 }}>
            <SiLinkedin />
          </motion.div>
        </motion.a>
        <motion.a
          variants={socialChildren}
          href="https://github.com/JMSabanes07"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.05 }}>
            <SiGithub />
          </motion.div>
        </motion.a>
        <motion.a
          variants={socialChildren}
          href="https://t.me/jmsabanes07"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.05 }}>
            <SiTelegram />
          </motion.div>
        </motion.a>
      </SocialsMotion>
    </PageContainerMotion>
  )
}

Projects.Layout = Layout

export default Projects
