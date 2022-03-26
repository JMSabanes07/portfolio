import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.text.negative};
  background: ${({ theme }) => theme.bg.negative};
  font-size: 1.2rem;
  padding: 1rem 2rem;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
`
