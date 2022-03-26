import { createContext, useState } from 'react'

export const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {
  const [offset, setOffset] = useState(0)

  const data = {
    offset,
    setOffset,
  }

  return (
    <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>
  )
}
