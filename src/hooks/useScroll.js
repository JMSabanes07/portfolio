import { useContext } from 'react'
import { ScrollContext } from 'contexts/scrollContext'

export const useScroll = (limit = 0) => {
  const { offset, setOffset } = useContext(ScrollContext)

  const onScroll = (e) => setOffset(e.target.scrollTop)

  return { onScroll, offset, onLimit: offset >= limit }
}
