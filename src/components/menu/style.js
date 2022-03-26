import styled, { css } from 'styled-components'

export const MenuContainer = styled.nav`
  justify-self: flex-end;
  display: grid;
  justify-items: right;
  align-items: center;

  height: 100%;
  width: 100%;
`

export const Item = styled.li`
  display: grid;
  text-align: center;
  position: relative;
  z-index: 0;
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.text.negative};
    z-index: -1;
  }
  button {
    background: none;
    border: none;
    filter: ${({ active }) => active && `invert(1)`};
    padding: 1.5rem 0;
    color: ${({ theme }) => theme.text.negative};
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 100%;
  place-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bg.negative};
`

export const BurgerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  width: fit-content;
  position: relative;
  z-index: 2;
  width: 40px;
  height: 40px;
  box-sizing: content-box;
  border-radius: 50%;
  cursor: pointer;

  .container {
    display: grid;
    gap: 2px;
    width: 20px;
    height: 14px;
  }

  .topline,
  .midline,
  .botline {
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.text.negative};
  }

  .topline {
    /* top: 0; */
  }
  .midline {
    /* top: calc(10px - 1.5px); */
  }
  .botline {
    /* bottom: 0; */
  }
  svg {
    fill: ${({ theme }) => theme.text.negative};
  }
`
export const ToggleButton = styled.button`
  display: flex;
  background: none;
  border: none;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bg.negative};
  filter: ${({ active }) => active && `invert(1)`};
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.text.negative};
  }
`

export const ColorToggleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  bottom: 5rem;
  width: 100%;
`
