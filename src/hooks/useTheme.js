import { useContext } from 'react'

import { ThemeContext } from 'contexts/themeContext'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const setDark = () => {
    localStorage.setItem('theme', 'dark')
    setTheme('dark')
  }

  const setLight = () => {
    localStorage.setItem('theme', 'light')
    setTheme('light')
  }

  const toggle = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return {
    toggle,
    setDark,
    setLight,
    theme,
  }
}
