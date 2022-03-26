import styled from 'styled-components'

export const DesktopMenuContainer = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-end;
  gap: 2rem;
  li {
    position: relative;
    button {
      background: none;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
    }
    .background{
      content: '':
      position: absolute;
      top: 100%;
      width: 100%;
      height: 4px;
      background: ${({ theme }) => theme.text.primary};
    }
  }
  .theme-toggle{
    display: grid;
    grid-auto-flow: column;
    gap: .5rem;
    button {
      display: grid;
      place-content: center;
      background: ${({ theme }) => theme.bg.negative};
      width: 30px;
      height: 30px;
      font-size: 1.1rem;
      cursor: pointer;
      padding: 1rem 1rem;
      border-radius: 50%;
      svg{
        fill: black;
      }
    }
    .light{
      background: ${({ themeActive, theme }) =>
        themeActive === 'light' ? theme.bg.negative : 'none'};
      svg{
        fill: white;
      }
    }
    .dark{
      background: ${({ themeActive, theme }) =>
        themeActive === 'dark' ? theme.bg.negative : 'none'};

    }
  }
`
