import styled from 'styled-components'
import { PageContainer, Title } from './container'
import { Button } from 'styles/components/button'

export const PageContainerExtend = styled(PageContainer)`
  display: grid;
  align-content: flex-start;
  gap: 3rem;
  @media (min-width: 769px) {
    ${Title} {
      justify-self: center;
      .bar {
        justify-self: center;
      }
    }
  }
`

export const ProjectsContainer = styled.section`
  display: grid;
  gap: 4rem;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Article = styled.article`
  display: grid;
  gap: 2rem;
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
  .button-container {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    ${Button} {
      justify-self: center;
      align-self: center;
    }
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
  }
  img {
    width: 100%;
  }
  p {
    font-size: 1rem;
  }
  footer {
    ul {
      display: flex;
      gap: 1rem;
      li {
        width: fit-content;
      }
    }
  }
  @media (min-width: 1025px) {
    grid-template-rows: 4rem 14rem auto auto;
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    header {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    p {
      overflow: hidden;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
    }
    footer {
      ul {
        justify-content: center;
      }
    }
  }
  /* @media (min-width: 1025px) {
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: auto 1fr;
    header {
      grid-row: 1/5;
      grid-column: ${({ invested }) => (invested ? '2/3' : '1/2')};
      img {
        width: 400px;
      }
    }
    h2 {
      grid-row: 1/2;
      grid-column: ${({ invested }) => (!invested ? '2/3' : '1/2')};
      justify-self: ${({ invested }) => (!invested ? 'left' : 'right')};;
    }
    p {
      grid-row: 2/3;
      grid-column: grid-column: ${({ invested }) =>
    !invested ? '2/3' : '1/2'};
      text-align: ${({ invested }) => (!invested ? 'left' : 'right')};
    }
    footer {
      grid-row: 3/4;
      grid-column: grid-column: ${({ invested }) =>
    !invested ? '2/3' : '1/2'};
      justify-self: ${({ invested }) => (!invested ? 'left' : 'right')};
    }
    ${Button} {
      grid-row: 4/5;
      grid-column: grid-column: ${({ invested }) =>
    !invested ? '2/3' : '1/2'};
      justify-self: ${({ invested }) => (!invested ? 'left' : 'right')};
      align-self: flex-end;
    }
  } */
`
