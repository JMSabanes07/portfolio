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

const TitleMotion = motion(Title)
const SubtitleMotion = motion(Subtitle)
const DescMotion = motion(Desc)
const ButtonMotion = motion(Button)
const ArticleMotion = motion(Article)

const Projects = (params) => {
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

  return (
    <PageContainerExtend>
      <TitleMotion initial="hidden" whileInView="show" variants={titleVariant}>
        Projects
        <motion.div className="bar" />
      </TitleMotion>
      <ProjectsContainer>
        <ArticleMotion
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true }}
        >
          <SubtitleMotion variants={childrenVariants}>Title</SubtitleMotion>
          <motion.header variants={childrenVariants}>
            <img
              src="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2022/03/621e3c558c1c3445874148.png"
              alt="image"
            />
          </motion.header>
          <DescMotion variants={childrenVariants} textAlign="justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia totam
            quo itaque vel nam libero quaerat sed veritatis hic nihil esse iste
            vero, culpa doloribus! Quod nihil iure nobis sunt. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quia totam quo itaque
            vel nam libero quaerat sed veritatis hic nihil esse iste vero, culpa
            doloribus! Quod nihil iure nobis sunt.
          </DescMotion>
          <motion.footer>
            <motion.ul
              initial="hidden"
              whileInView="show"
              variants={socialVariants}
              viewport={{ once: true }}
            >
              <motion.li variants={childrenVariants}>
                <SiReact />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiNextdotjs />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiJavascript />
              </motion.li>
            </motion.ul>
          </motion.footer>
          <div className="button-container">
            <ButtonMotion variants={childrenVariants}>
              {`<Go to web/>`}
            </ButtonMotion>
            <ButtonMotion variants={childrenVariants}>
              {`<Go to github/>`}
            </ButtonMotion>
          </div>
        </ArticleMotion>
        <ArticleMotion
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true }}
        >
          <SubtitleMotion variants={childrenVariants}>Title</SubtitleMotion>
          <motion.header variants={childrenVariants}>
            <img
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/02/62114e7056e4d165653464.jpg"
              alt="image"
            />
          </motion.header>
          <DescMotion variants={childrenVariants} textAlign="justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia totam
            quo itaque vel nam libero quaerat sed veritatis hic nihil esse iste
            vero, culpa doloribus! Quod nihil iure nobis sunt. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quia totam quo itaque
            vel nam libero quaerat sed veritatis hic nihil esse iste vero, culpa
            doloribus! Quod nihil iure nobis sunt.
          </DescMotion>
          <motion.footer>
            <motion.ul
              initial="hidden"
              whileInView="show"
              variants={socialVariants}
              viewport={{ once: true }}
            >
              <motion.li variants={childrenVariants}>
                <SiReact />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiNextdotjs />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiJavascript />
              </motion.li>
            </motion.ul>
          </motion.footer>
          <div className="button-container">
            <ButtonMotion variants={childrenVariants}>
              {`<Go to web/>`}
            </ButtonMotion>
            <ButtonMotion variants={childrenVariants}>
              {`<Go to github/>`}
            </ButtonMotion>
          </div>
        </ArticleMotion>
        <ArticleMotion
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true }}
        >
          <SubtitleMotion variants={childrenVariants}>Title</SubtitleMotion>
          <motion.header variants={childrenVariants}>
            <img
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/03/623207110f63a774112404.jpg"
              alt="image"
            />
          </motion.header>
          <DescMotion variants={childrenVariants} textAlign="justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia totam
            quo itaque vel nam libero quaerat sed veritatis hic nihil esse iste
            vero, culpa doloribus! Quod nihil iure nobis sunt. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quia totam quo itaque
            vel nam libero quaerat sed veritatis hic nihil esse iste vero, culpa
            doloribus! Quod nihil iure nobis sunt.
          </DescMotion>
          <motion.footer>
            <motion.ul
              initial="hidden"
              whileInView="show"
              variants={socialVariants}
              viewport={{ once: true }}
            >
              <motion.li variants={childrenVariants}>
                <SiReact />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiNextdotjs />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiJavascript />
              </motion.li>
            </motion.ul>
          </motion.footer>
          <div className="button-container">
            <ButtonMotion variants={childrenVariants}>
              {`<Go to web/>`}
            </ButtonMotion>
            <ButtonMotion variants={childrenVariants}>
              {`<Go to github/>`}
            </ButtonMotion>
          </div>
        </ArticleMotion>
        <ArticleMotion
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true }}
        >
          <SubtitleMotion variants={childrenVariants}>Title</SubtitleMotion>
          <motion.header variants={childrenVariants}>
            <img
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/02/6214f79e0c7bd477612789.jpg"
              alt="image"
            />
          </motion.header>
          <DescMotion variants={childrenVariants} textAlign="justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia totam
            quo itaque vel nam libero quaerat sed veritatis hic nihil esse iste
            vero, culpa doloribus! Quod nihil iure nobis sunt. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quia totam quo itaque
            vel nam libero quaerat sed veritatis hic nihil esse iste vero, culpa
            doloribus! Quod nihil iure nobis sunt.
          </DescMotion>
          <motion.footer>
            <motion.ul
              initial="hidden"
              whileInView="show"
              variants={socialVariants}
              viewport={{ once: true }}
            >
              <motion.li variants={childrenVariants}>
                <SiReact />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiNextdotjs />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiJavascript />
              </motion.li>
            </motion.ul>
          </motion.footer>
          <div className="button-container">
            <ButtonMotion variants={childrenVariants}>
              {`<Go to web/>`}
            </ButtonMotion>
            <ButtonMotion variants={childrenVariants}>
              {`<Go to github/>`}
            </ButtonMotion>
          </div>
        </ArticleMotion>
        <ArticleMotion
          initial="hidden"
          whileInView="show"
          variants={variants}
          viewport={{ once: true }}
        >
          <SubtitleMotion variants={childrenVariants}>Title</SubtitleMotion>
          <motion.header variants={childrenVariants}>
            <img
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2022/01/61f8513998545984541347.jpg"
              alt="image"
            />
          </motion.header>
          <DescMotion variants={childrenVariants} textAlign="justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia totam
            quo itaque vel nam libero quaerat sed veritatis hic nihil esse iste
            vero, culpa doloribus! Quod nihil iure nobis sunt. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Quia totam quo itaque
            vel nam libero quaerat sed veritatis hic nihil esse iste vero, culpa
            doloribus! Quod nihil iure nobis sunt.
          </DescMotion>
          <motion.footer>
            <motion.ul
              initial="hidden"
              whileInView="show"
              variants={socialVariants}
              viewport={{ once: true }}
            >
              <motion.li variants={childrenVariants}>
                <SiReact />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiNextdotjs />
              </motion.li>
              <motion.li variants={childrenVariants}>
                <SiJavascript />
              </motion.li>
            </motion.ul>
          </motion.footer>
          <div className="button-container">
            <ButtonMotion variants={childrenVariants}>
              {`<Go to web/>`}
            </ButtonMotion>
            <ButtonMotion variants={childrenVariants}>
              {`<Go to github/>`}
            </ButtonMotion>
          </div>
        </ArticleMotion>
      </ProjectsContainer>
    </PageContainerExtend>
  )
}

Projects.Layout = Layout

export default Projects
