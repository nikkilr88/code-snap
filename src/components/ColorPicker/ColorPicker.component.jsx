import React, { useState, useContext, useEffect, useRef } from 'react'

// Context
import { AppContext } from '../../contexts/appContext'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

// Styles
import {
  StyledColorOption,
  StyledInputWrapper,
  StyledColorPickerModal,
  StyledColorPickerWrapper
} from './ColorPicker.styles'

const ColorPicker = () => {
  // State
  const [showPicker, setShowPicker] = useState(false)

  // Context
  const { color, changeColor } = useContext(AppContext)

  // Refs
  const colorPicker = useRef()
  const colorPickerSelected = useRef()

  // Toggle picker options visibility
  const togglePicker = e => {
    const btnClick = !e.target.classList.contains('selected')
    const clickInside =
      colorPicker.current && colorPicker.current.contains(e.target)

    setShowPicker(prevState =>
      clickInside ? true : btnClick ? false : !prevState
    )
  }

  // Close Toggle picker when ESC is pressed or when focus is lost
  const closePicker = event => {
    switch (event.key) {
      case 'Escape':
        colorPickerSelected.current.focus()
        setShowPicker(false)
        break
      case 'Tab':
        if (
          colorPicker.current &&
          !colorPicker.current.contains(event.target)
        ) {
          setShowPicker(false)
        }
        break
      default:
        break
    }
  }

  // Color options
  const colors = [
    '#3498db',
    '#2980b9',
    '#2ecc71',
    '#16a085',
    '#e74c3c',
    '#c0392b',
    '#34495e',
    '#2c3e50',
    '#8e44ad',
    '#333333',
    '#000000',
    '#ffffff'
  ]

  // Color options JSX
  const colorOptions = colors.map((colorOption, i) => (
    <StyledColorOption
      className="color option"
      key={colorOption}
      onClick={changeColor}
      aria-label={colorOption}
      data-color={colorOption}
      colorOption={colorOption}
      selected={color === colorOption}
    />
  ))

  // This runs once on mount
  useEffect(() => {
    // Add event listener to toggle picker
    document.addEventListener('click', togglePicker)
    document.addEventListener('keyup', closePicker)

    // Remove event listener before unmount
    return () => {
      document.removeEventListener('click', togglePicker)
      document.removeEventListener('keyup', closePicker)
    }
  }, [])

  return (
    <StyledColorPickerWrapper color={color}>
      <button
        aria-label={`Accent color ${color}`}
        className="color selected"
        ref={colorPickerSelected}
      />

      {showPicker && (
        <StyledColorPickerModal ref={colorPicker}>
          <div className="colors">{colorOptions}</div>

          <StyledInputWrapper>
            <div className="icon-wrapper">
              <FontAwesomeIcon className="hashtag" icon={faHashtag} />
            </div>

            <input
              type="text"
              maxLength="6"
              onChange={changeColor}
              className="color-input"
              placeholder="Hex color code"
              value={color.replace('#', '')}
            />
          </StyledInputWrapper>
        </StyledColorPickerModal>
      )}
    </StyledColorPickerWrapper>
  )
}

export default ColorPicker
