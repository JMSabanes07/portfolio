import { createContext, useState } from 'react'

export const LoaderContext = createContext()

export const LoaderProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    isVisible,
    setIsVisible,
    isLoading,
    setIsLoading,
  }

  return (
    <LoaderContext.Provider value={data}>{children}</LoaderContext.Provider>
  )
}
