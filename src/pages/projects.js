import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import {
  PageContainerExtend,
  ProjectsContainer,
  Article,
} from 'styles/pages/projects'
import { motion } from 'framer-motion'
import { Button } from 'styles/components/button'
import { Title, Subtitle, Desc } from 'styles/pages/container'
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
} from 'react-icons/si'

const Icons = {
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
}

const TitleMotion = motion(Title)
const SubtitleMotion = motion(Subtitle)
const DescMotion = motion(Desc)
const ButtonMotion = motion(Button)
const ArticleMotion = motion(Article)

const data = [
  {
    title: 'This web page!',
    image: {
      src: '/a.png',
      alt: 'a',
    },
    variants: [
      {
        name: 'SiNextdotjs',
      },
      {
        name: 'SiReact',
      },
      {
        name: 'SiStyledcomponents',
      },
    ],
    link: 'https://sudocoding.com',
    github: 'https://github.com',
  },
  {
    title: 'This web page!',
    image: {
      src: '/a.png',
      alt: 'a',
    },
    variants: [
      {
        name: 'SiNextdotjs',
      },
      {
        name: 'SiReact',
      },
      {
        name: 'SiStyledcomponents',
      },
    ],
    link: 'https://sudocoding.com',
    github: 'https://github.com',
  },
  {
    title: 'This web page!',
    image: {
      src: '/a.png',
      alt: 'a',
    },
    variants: [
      {
        name: 'SiNextdotjs',
      },
      {
        name: 'SiReact',
      },
      {
        name: 'SiStyledcomponents',
      },
    ],
    link: 'https://sudocoding.com',
    github: 'https://github.com',
  },
  {
    title: 'This web page!',
    image: {
      src: '/a.png',
      alt: 'a',
    },
    variants: [
      {
        name: 'SiNextdotjs',
      },
      {
        name: 'SiReact',
      },
      {
        name: 'SiStyledcomponents',
      },
    ],
    link: 'https://sudocoding.com',
    github: 'https://github.com',
  },
]

const Projects = (params) => {
  const [projects, setProjects] = useState(null)
  const variants = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariant = {
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
        delayChildren: 0.1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  useEffect(() => {
    const getPost = async () => {
      const result = await fetch('/api/posts')
      setProjects(await result.json())
      // console.log(await result.json())
    }
    getPost()
  }, [])

  return (
    <PageContainerExtend>
      <TitleMotion initial="hidden" whileInView="show" variants={titleVariant}>
        Projects
        <motion.div className="bar" />
      </TitleMotion>
      <ProjectsContainer>
        {projects?.map(({ title, image, desc, variants, link, github }, i) => {
          return (
            <ArticleMotion
              initial="hidden"
              whileInView="show"
              variants={variants}
              viewport={{ once: true }}
              key={i}
            >
              <SubtitleMotion variants={childrenVariants}>
                {title}
              </SubtitleMotion>
              <motion.header variants={childrenVariants}>
                <img src={image.src} alt={image.alt} />
              </motion.header>
              {/* <DescMotion variants={childrenVariants} textAlign="justify">
                {desc}
              </DescMotion> */}
              <motion.footer>
                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  variants={socialVariants}
                  viewport={{ once: true }}
                >
                  {variants.map((variant, i) => {
                    return (
                      <motion.li key={i} variants={childrenVariants}>
                        {Icons[variant.name]()}
                      </motion.li>
                    )
                  })}
                </motion.ul>
              </motion.footer>
              <div className="button-container">
                {link && (
                  <ButtonMotion variants={childrenVariants}>
                    {`<Go to web/>`}
                  </ButtonMotion>
                )}
                {github && (
                  <ButtonMotion variants={childrenVariants}>
                    {`<Go to github/>`}
                  </ButtonMotion>
                )}
              </div>
            </ArticleMotion>
          )
        })}
      </ProjectsContainer>
    </PageContainerExtend>
  )
}

Projects.Layout = Layout

export default Projects
