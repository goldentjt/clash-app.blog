export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  // 1. Page Background / Tab Visibility Controller
  const handleVisibilityChange = () => {
    if (document.hidden) {
      document.documentElement.classList.add('page-hidden')
    } else {
      document.documentElement.classList.remove('page-hidden')
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true })

  // 2. IntersectionObserver for Ambient Continuous Animations (Pause off-screen, resume on-screen)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('anim-paused')
        } else {
          entry.target.classList.add('anim-paused')
        }
      })
    }, {
      rootMargin: '50px 0px 50px 0px',
      threshold: 0.01
    })

    const observeAmbientElements = () => {
      const ambientEls = document.querySelectorAll(
        '.bracket-anim-left, .bracket-anim-right, .leaf-sway-11, .leaf-sway-15, .paperclip-decor, [data-ambient-loop]'
      )
      ambientEls.forEach((el) => observer.observe(el))
    }

    // Observe initially and on dynamic route updates
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeAmbientElements, { once: true })
    } else {
      observeAmbientElements()
    }

    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:finish', () => {
      setTimeout(observeAmbientElements, 100)
    })
  }
})
