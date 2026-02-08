import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target) // anima só uma vez
          }
        })
      },
      {
        threshold: 0.25
      }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
