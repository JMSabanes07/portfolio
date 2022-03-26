import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
  z-index: -1;
  @media (min-width: 1025px) {
    padding: 2rem;
  }
`

export const Title = styled.h1`
  display: grid;
  position: relative;
  width: fit-content;
  padding-bottom: 1rem;
  font-size: 2.5rem;
  .bar {
    justify-self: left;
    position: absolute;
    bottom: 0;
    width: 30%;
    height: 3px;
    background: ${({ theme }) => theme.text.primary};
  }
`
export const Subtitle = styled.h2`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding-bottom: 1rem;
  padding: 0.2rem 0.5rem;
  background: ${({ theme }) => theme.bg.negative};
  color: ${({ theme }) => theme.text.negative};
  font-size: 1.5rem;
`

export const Desc = styled.p`
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-size: 1.2rem;
  line-height: 1.2;
`
