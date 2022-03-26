const { useState } = require('react')

export const useActive = (value = false) => {
  const [active, setActive] = useState(value)

  const toggle = () => {
    setActive(!active)
  }

  const activate = () => {
    setActive(true)
  }

  const deactivate = () => {
    setActive(false)
  }

  return {
    toggle,
    activate,
    deactivate,
    active,
  }
}
