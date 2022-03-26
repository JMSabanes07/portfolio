import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSwipeable } from 'react-swipeable'
import { useMenu } from 'hooks/useMenu'
import { useChangePage } from 'hooks/useChangePage'
import { useScroll } from 'hooks/useScroll'
import Header from 'components/header'
import Footer from 'components/footer'
import { LayoutContainer } from './styles'

const Layout = ({ children }) => {
  const menu = useMenu()
  const { onScroll } = useScroll()
  const { goTo } = useChangePage()
  const layoutRef = useRef()
  const router = useRouter()
  const { ref } = useSwipeable({
    onSwipedLeft: () => menu.activate(),
    onSwipedRight: () => menu.deactivate(),
  })

  useEffect(() => {
    ref(document)
  }, [])

  useEffect(() => {
    layoutRef.current.scrollTo(0, 0)

    router.beforePopState(({ url, as, options }) => {
      goTo(url)
      return false
    })
  }, [router])

  return (
    <LayoutContainer ref={layoutRef} onScroll={onScroll}>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
