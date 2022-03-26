import styled from 'styled-components'
import { PageContainer, Subtitle, Title, Desc } from './container'

export const PageContainerExtend = styled(PageContainer)`
  display: grid;
  align-content: flex-start;
  gap: 3rem;
  .about {
    display: grid;
    align-content: flex-start;
    gap: 3rem;
    .imageContainer {
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        border-radius: 50%;
        width: 60vw;
        height: 60vw;
        object-fit: contain;
        background-color: ${({ theme }) => theme.bg.negative};
      }
    }
    .desc {
      display: grid;
      align-content: center;
      gap: 3rem;
    }
    ${Subtitle} {
      justify-self: center;
    }
  }
  @media (min-width: 767px) {
    .about {
      grid-template-columns: auto 1fr;
      .imageContainer {
        width: fit-content;
        img {
          width: 15rem;
          height: 15rem;
        }
      }
      .desc {
        gap: 1rem;
        ${Subtitle} {
          justify-self: left;
        }
      }
    }
  }
  @media (min-width: 1025px) {
    grid-template-columns: minmax(1024px, 100%);
    ${Title} {
      justify-self: center;
      .bar {
        justify-self: center;
      }
    }
    .about {
      justify-self: center;
    }
  }
`

export const ToolsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  svg {
    width: 100%;
    height: 3rem;
  }
  @media (min-width: 767px) {
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
  }
  @media (min-width: 1025px) {
    justify-items: center;
    grid-template-columns: repeat(auto-fit, 100px);
  }
`

export const Tool = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  padding-bottom: 2rem;
`
