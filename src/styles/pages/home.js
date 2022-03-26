import styled from 'styled-components'
import { Button } from 'styles/components/button'

export const CoverPage = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  gap: 2rem;
  .desc {
    display: grid;
    gap: 2rem;
    h1 {
      font-size: 4.5rem;
      width: min-content;
    }
    h2 {
      display: inline-block;
      width: fit-content;
      font-size: 1.5rem;
      font-weight: 400;
      background: ${({ theme }) => theme.bg.negative};
      color: ${({ theme }) => theme.text.negative};
      padding: 0.2rem 0.5rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
  .button-container {
    display: grid;
    place-content: center;
    padding: 3rem;
  }
  .image-container {
    display: none;
  }

  @media (min-width: 426px) {
    .desc {
      p {
        text-align: center;
      }
      h1 {
        justify-self: center;
        text-align: center;
        width: 426px;
      }
      h2 {
        justify-self: center;
      }
    }
  }
  @media (min-width: 767px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    /* align-content: flex-start; */
    .desc {
      grid-row: 1/3;
      grid-column: 1/2;
      align-content: center;
      p {
        text-align: left;
      }
      h1 {
        justify-self: left;
        text-align: left;
        width: 426px;
      }
      h2 {
        justify-self: left;
      }
    }
    .image-container {
      display: grid;
      grid-row: 1/4;
      grid-column: 2/3;
      align-content: center;
      height: 100%;
      svg {
        width: 100%;
        height: fit-content;
        fill: ${({ theme }) => theme.bg.negative};
      }
    }
    .button-container {
      grid-column: 1/2;
      padding: 0;
      justify-content: left;
    }
  }
`
