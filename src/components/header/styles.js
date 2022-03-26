import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;

  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  background: ${({ theme }) => theme.bg.primary};
  border-bottom: ${({ borderVisible, theme }) =>
    borderVisible ? `1px solid ${theme.bg.negative}` : 'none'};

  @media (min-width: 1025px) {
    padding: 2rem;
  }
  @media (min-width: 1441px) {
    width: 1440px;
  }
`

export const Logo = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`
