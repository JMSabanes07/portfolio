import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  /* background: ${({ theme }) => theme.bg.negative}; */
  height: fit-content;
  * {
    /* color: ${({ theme }) => theme.text.negative}; */
  }
  p {
    text-align: center;
  }
  .doit {
    p {
      padding-bottom: 0.5rem;
    }
    .icons {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      gap: 1rem;
    }
  }
`
