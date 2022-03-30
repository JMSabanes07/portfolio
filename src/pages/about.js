import Head from 'next/head'
import { Title, Subtitle, Desc } from 'styles/pages/container'
import Layout from 'components/layout'
import { motion } from 'framer-motion'
import { PageContainerExtend, ToolsContainer, Tool } from 'styles/pages/about'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiStyledcomponents,
  SiNodedotjs,
  SiMysql,
  SiPrisma,
  SiWindowsterminal,
  SiNginx,
  SiGit,
  SiFramer,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiSass,
  SiSvelte,
  SiTypescript,
  SiVisualstudiocode,
  SiExpress,
  SiJest,
} from 'react-icons/si'

const PageContainerMotion = motion(PageContainerExtend)
const TitleMotion = motion(Title)
const SubtitleMotion = motion(Subtitle)
const DescMotion = motion(Desc)
const ToolsContainerMotion = motion(ToolsContainer)
const ToolMotion = motion(Tool)

const About = () => {
  const variants = {
    show: (i = 1.2) => ({
      transition: {
        staggerChildren: 0.1,
        delayChildren: i,
      },
    }),
    hidden: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemsVariants = {
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

  const childrenVariants = {
    // whileInView: 'show',
    variants: itemsVariants,
  }

  return (
    <PageContainerMotion
      initial="hidden"
      whileInView="show"
      variants={variants}
      viewport={{ once: true }}
      custom={0.3}
    >
      <Head>
        <title>About Me - JMSabanes</title>
      </Head>
      <TitleMotion {...childrenVariants}>
        About Me
        <motion.div className="bar" />
      </TitleMotion>
      <div className="about">
        <motion.div className="imageContainer" {...childrenVariants}>
          <img src="/avatar.png" alt="me" />
        </motion.div>
        <div className="desc">
          <SubtitleMotion textAlign="center" {...childrenVariants}>
            Front-End Developer
          </SubtitleMotion>
          <DescMotion textAlign="justify" {...childrenVariants}>
            I&#39;m a self-taught Software Developer located in Argentina. I
            have a passion for writing code, almost as much as playing games,
            watch anime or eat potato omelette.
            <br />
            <br />
            Interested in the whole front-end spectrum and in learn new things
            with each line of code.
          </DescMotion>
        </div>
      </div>
      <TitleMotion {...childrenVariants}>
        My Tools
        <motion.div className="bar" />
      </TitleMotion>
      <ToolsContainerMotion
        initial="hidden"
        whileInView="show"
        variants={variants}
        viewport={{ once: true }}
        custom={0.3}
      >
        <ToolMotion {...childrenVariants}>
          <SiReact />
          <p>React</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiNextdotjs />
          <p>Next js</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiJavascript />
          <p>Javascript</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiCss3 />
          <p>CSS</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiSass />
          <p>Sass</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiHtml5 />
          <p>HTML</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiStyledcomponents />
          <p>Styled Components</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiFramer />
          <p>Framer Motion</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiNodedotjs />
          <p>Node js</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiExpress />
          <p>Express</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiMysql />
          <p>MySql</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiPrisma />
          <p>Prisma</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiWindowsterminal />
          <p>Terminal</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiVisualstudiocode />
          <p>VSCode</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiNginx />
          <p>Nginx</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiGit />
          <p>Git</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiAdobexd />
          <p>Adobe XD</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiAdobeillustrator />
          <p>Adobe Illustrator</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiAdobephotoshop />
          <p>Adobe Photoshop</p>
        </ToolMotion>
      </ToolsContainerMotion>
      <TitleMotion {...childrenVariants}>
        I Want To Learn
        <motion.div className="bar" />
      </TitleMotion>
      <ToolsContainerMotion
        initial="hidden"
        whileInView="show"
        variants={variants}
        viewport={{ once: true }}
        custom={0.3}
      >
        <ToolMotion {...childrenVariants}>
          <SiSvelte />
          <p>Svelte</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiTypescript />
          <p>Typescript</p>
        </ToolMotion>
        <ToolMotion {...childrenVariants}>
          <SiJest />
          <p>Jest</p>
        </ToolMotion>
      </ToolsContainerMotion>
    </PageContainerMotion>
  )
}

About.Layout = Layout

export default About
