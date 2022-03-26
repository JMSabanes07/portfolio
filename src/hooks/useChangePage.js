import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLoader } from './useLoader'

export const useChangePage = (params) => {
  const [link, setLink] = useState(false)
  const router = useRouter()
  const { show, hide, isLoading } = useLoader()

  useEffect(() => {
    const timeout = () => {
      setTimeout(() => hide(), 200)
    }

    if (link && !isLoading) {
      router.push(link)
      setLink(false)
    }
    router.events.on('routeChangeComplete', timeout)
  }, [isLoading])

  const goTo = (link) => {
    show()
    setLink(link)
  }

  return {
    goTo,
  }
}
