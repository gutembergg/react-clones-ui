import { useContext, useEffect } from 'react'
import { useMotionValue } from 'framer-motion'
import ModelsContext from './ModelsContext'

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext)
  const scrollY = useMotionValue(0)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    if (wrapperRef.current) {
      const updateScroll = () => {
        if (wrapperRef.current) {
          const { scrollTop, scrollHeight, offsetHeight } = wrapperRef.current

          const fullScreen = scrollHeight - offsetHeight

          scrollY.set(scrollTop)
          scrollProgress.set(scrollTop / fullScreen)
        }
      }

      wrapperRef.current?.addEventListener('scroll', updateScroll)

      return () =>
        wrapperRef.current?.removeEventListener('scroll', updateScroll)
    }
  }, [scrollY, scrollProgress, wrapperRef])

  return { scrollY, scrollProgress }
}
