import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from 'components/layout'
import {
  PageContainerExtend,
  ProjectsContainer,
  Article,
} from 'styles/pages/projects'
import { motion } from 'framer-motion'
import { Title, Subtitle, Desc } from 'styles/pages/container'
import { FaGlobe } from 'react-icons/fa'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

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
  SiGithub,
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
const ArticleMotion = motion(Article)

const Projects = (params) => {
  const [projects, setProjects] = useState(null)
  const articleVariants = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
    hidden: {
      y: 100,
      opacity: 0,
      transition: {
        delay: 0.2,
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

  const titleArticleVariants = {
    show: {
      y: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    hidden: {
      y: -50,
      transition: {
        ease: 'easeInOut',
      },
    },
  }
  const footerArticleVariants = {
    show: {
      y: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    hidden: {
      y: 50,
      transition: {
        ease: 'easeInOut',
      },
    },
  }

  const upAppearVariants = {
    show: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: -50,
      opacity: 0,
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
    }
    getPost()
  }, [])

  return (
    <PageContainerExtend>
      <Head>
        <title>My Projects - JMSabanes</title>
      </Head>
      <TitleMotion
        initial="hidden"
        whileInView="show"
        variants={titleVariant}
        viewport={{ once: true }}
      >
        Projects
        <motion.div className="bar" />
      </TitleMotion>
      <ProjectsContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
        >
          <Masonry className="mansory">
            {projects?.map(
              ({ title, image, desc, variants, link, github }, i) => {
                return (
                  <ArticleMotion
                    initial="hidden"
                    whileInView="show"
                    variants={articleVariants}
                    viewport={{ once: true }}
                    key={i}
                  >
                    <SubtitleMotion variants={titleArticleVariants}>
                      {title}
                    </SubtitleMotion>
                    <motion.main>
                      <header>
                        <img src={image?.src} alt={image?.alt} />
                      </header>
                      <DescMotion variants={''} textAlign="justify">
                        {desc}
                      </DescMotion>
                    </motion.main>
                    <motion.footer variants={footerArticleVariants}>
                      <motion.ul initial="hidden" variants={socialVariants}>
                        {variants?.map((variant, i) => {
                          return (
                            <motion.li key={i}>
                              {Icons[variant.name]()}
                            </motion.li>
                          )
                        })}
                      </motion.ul>
                    </motion.footer>
                    <div className="button-container">
                      {link && (
                        <motion.a
                          whileTap={{ scale: 0.85 }}
                          whileHover={{ scale: 1.05 }}
                          href={link}
                          target="_blank"
                          variants={upAppearVariants}
                          rel="noreferrer"
                        >
                          {`<`}
                          <FaGlobe />
                          {`/>`}
                        </motion.a>
                      )}
                      {github && (
                        <motion.a
                          whileTap={{ scale: 0.85 }}
                          whileHover={{ scale: 1.05 }}
                          href={github}
                          target="_blank"
                          variants={upAppearVariants}
                          rel="noreferrer"
                        >
                          {`<`}
                          <SiGithub />
                          {`/>`}
                        </motion.a>
                      )}
                    </div>
                  </ArticleMotion>
                )
              }
            )}
            <></>
          </Masonry>
        </ResponsiveMasonry>
      </ProjectsContainer>
    </PageContainerExtend>
  )
}

Projects.Layout = Layout

export default Projects
