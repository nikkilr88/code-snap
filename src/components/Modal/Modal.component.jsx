import React, { useEffect } from 'react'

import { StyledModal } from './Modal.styles'

const NavModal = React.forwardRef((props, ref) => {
  // Close modal when user clicks out
  const handleOutsideClick = event => {
    const clickInside = ref.current && ref.current.contains(event.target)
    if (!clickInside) props.setShowModal(false)
  }

  // Close modal when ESC is pressed or if user tabs out
  const handleKeyPress = event => {
    const modalFocused = ref.current && ref.current.contains(event.target)

    switch (event.key) {
      case 'Escape':
        // Close color menu
        props.setShowModal(false)

      // Put focus back on selected color button
      // FIXME: Set focus to parent button
      // if (modalFocused) return ref.current.focus()

      case 'Tab':
        // If user tabs out of color picker menu, close menu
        if (!modalFocused) return props.setShowModal(false)

      default:
        break
    }
  }

  // Similar to componentDidMount
  useEffect(() => {
    // Close modal on outside click
    document.addEventListener('click', handleOutsideClick)
    // Add tab and esc key functionality
    document.addEventListener('keyup', handleKeyPress)

    // Remove event listener before unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [ref])

  return <StyledModal ref={ref}>{props.children}</StyledModal>
})

export default NavModal
