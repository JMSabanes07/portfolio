import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 3rem;
  padding-top: 5rem;

  max-width: 1440px;
  height: 100vh;
  position: relative;
  z-index: 999;

  @media (min-width: 769px) {
    margin: auto;
    justify-content: center;
  }
`
