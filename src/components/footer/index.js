import { FooterContainer } from './styles'
import {
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiPrisma,
  SiFramer,
} from 'react-icons/si'

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Designed & Built by <strong>Juan Manuel Sabanes</strong>
      </p>
      <div className="doit">
        <p>Do it with</p>
        <div className="icons">
          <SiReact />
          <SiNextdotjs />
          <SiStyledcomponents />
          <SiPrisma />
          <SiFramer />
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
