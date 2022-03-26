import styled from 'styled-components'

export const PageLoaderContainer = styled.div`
  display: grid;
  align-items: center;
  width: 50%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: ${({ position }) => position === 'left' && 0};
  right: ${({ position }) => position === 'right' && 0};
  z-index: 10;
  letter-spacing: 0.07rem;
  overflow: hidden;
  background: ${({ theme }) => theme.bg.primary};
  h1 {
    width: 200%;
    font-size: 3rem;
    text-align: center;
    transform: ${({ position }) => position === 'right' && 'translate(-50%)'};
  }
`
