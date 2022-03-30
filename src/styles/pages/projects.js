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
`

export const Article = styled.article`
  display: grid;
  width: 100%;
  position: relative;
  gap: 1rem;
  padding-bottom: 4rem;
  h2 {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1rem;
    text-transform: capitalize;
  }
  header {
    height: 100%;
    width: 100%;
    img {
      min-height: 200px;
      height: 100%;
      max-height: 600px;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  main {
    display: grid;
    width: 100%;
    height: 100%;
    gap: 1rem;
    p {
      /* font-size: 1rem; */
    }
  }
  footer {
    padding: 0.5rem;
    ul {
      display: flex;
      justify-content: center;
      gap: 1rem;
      li {
        width: fit-content;
        svg {
          fill: ${({ theme }) => theme.text.primary};
        }
      }
    }
  }
  .button-container {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    a {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: center;
      justify-self: center;
      align-self: center;
      gap: 0.5rem;
      padding: 1rem;
      background: ${({ theme }) => theme.bg.negative};
      width: 100%;
      color: ${({ theme }) => theme.text.negative};
      svg {
        width: 25px;
        height: 25px;
        fill: ${({ theme }) => theme.text.negative};
      }
    }
  }
  @media (min-width: 769px) {
    padding: 2rem;
  }
`
// export const Article = styled.article`
//   display: grid;
//   width: 100%;
//   position: relative;
//   main {
//     display: grid;
//     grid-template-rows: auto 1fr auto;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     overflow: hidden;
//     h2 {
//       text-align: center;
//       font-size: 1.5rem;

//       padding: 0.5rem;
//     }
//     footer {
//       padding: 0.5rem;
//       background: ${({ theme }) => theme.bg.negative};
//       ul {
//         display: flex;
//         gap: 1rem;
//         li {
//           width: fit-content;
//           svg {
//             fill: ${({ theme }) => theme.text.negative};
//           }
//         }
//       }
//     }
//     .button-container {
//       display: grid;
//       grid-auto-flow: column;
//       gap: 1rem;
//       ${Button} {
//         justify-self: center;
//         align-self: center;
//       }
//     }
//   }
//   header {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     img {
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//       object-position: center;
//     }
//   }
//   @media (min-width: 1025px) {
//     grid-template-rows: 4rem 14rem auto auto;
//     h2 {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 100%;
//       height: 100%;
//       text-align: center;
//     }
//     header {
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         object-position: center;
//       }
//     }
//     p {
//       overflow: hidden;
//       width: 100%;
//       display: -webkit-box;
//       -webkit-line-clamp: 7;
//       -webkit-box-orient: vertical;
//     }
//     footer {
//       ul {
//         justify-content: center;
//       }
//     }
//   }
// `
