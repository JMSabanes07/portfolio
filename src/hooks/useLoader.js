import { useContext } from 'react'
import { LoaderContext } from 'contexts/loaderContext'

export const useLoader = () => {
  // prettier-ignore
  const { 
    isVisible,
    setIsVisible,
    isLoading,
    setIsLoading 
  } = useContext(LoaderContext)

  const animationLife = (bool) => {
    setIsLoading(bool)
  }

  const show = () => {
    setIsVisible(true)
  }

  const hide = () => {
    setIsVisible(false)
  }

  const toggle = () => {
    setIsVisible(!isVisible)
  }

  return {
    show,
    hide,
    toggle,
    isVisible,
    isLoading,
    animationLife,
  }
}
