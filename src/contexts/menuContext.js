import { createContext, useState } from 'react'

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const contextValues = {
    isOpen,
    setIsOpen,
  }

  return (
    <MenuContext.Provider value={contextValues}>
      {children}
    </MenuContext.Provider>
  )
}
