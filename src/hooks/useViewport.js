import { useEffect, useState } from 'react'

export const useViewport = (width) => {
  const [mediaQuery, setMediaQuery] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (innerWidth > width) {
        setMediaQuery(true)
      } else {
        setMediaQuery(false)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => removeEventListener('resize', handleResize)
  }, [])

  return {
    mediaQuery,
  }
}
