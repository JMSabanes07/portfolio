import { useState, createContext, useEffect } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { dark, light } from '../styles/theme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const isSistemDark = window.matchMedia('(prefers-color-scheme: dark)')

    const localTheme = localStorage.getItem('theme')

    if (localTheme) {
      setTheme(localTheme)
      setIsloading(false)
      return
    }
    const event = (event) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    isSistemDark.addListener(event)
    setIsloading(false)
    return () => removeEventListener(event)
  }, [])

  if (isLoading) return <></>
  return (
    <Provider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
          isLoading,
          setIsloading,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </Provider>
  )
}
