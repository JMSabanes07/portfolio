import styled from 'styled-components'
import { PageContainer, Title, Desc } from './container'
import { Button } from 'styles/components/button'

export const PageContainerExtend = styled(PageContainer)`
  display: grid;
  grid-template-rows: auto auto 1fr 1fr;
  gap: 3rem;

  ${Button} {
    align-self: center;
    justify-self: center;
  }

  @media (min-width: 767px) {
    ${Desc} {
      justify-self: center;
      max-width: 767px;
      text-align: center;
    }
    ${Title} {
      justify-self: center;
      .bar {
        justify-self: center;
      }
    }
  }

  @media (min-width: 769px) {
    grid-template-rows: repeat(4, auto);
    align-content: center;
  }
`

export const Socials = styled.div`
  align-self: flex-start;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 2rem;
  position: relative;
  svg {
    width: 30px;
    height: 30px;
  }
  .recomended {
    display: grid;
    span {
      justify-self: center;
      position: absolute;
      top: 150%;
      ::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: calc(50% - 7px);
        width: 0;
        height: 0;
        border-width: 0 7px 7px;
        border-style: solid;
        border-color: transparent transparent
          ${({ theme }) => theme.text.primary};
      }
    }
  }
`
