import { useContext } from 'react'
import { MenuContext } from 'contexts/menuContext'

export const useMenu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const activate = () => {
    setIsOpen(true)
  }

  const deactivate = () => {
    setIsOpen(false)
  }

  return {
    toggle,
    activate,
    deactivate,
    isOpen,
  }
}
