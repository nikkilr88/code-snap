import React, { useState, useContext, useEffect, useRef } from 'react'

import NavModal from '../Modal/Modal.component'

// Context
import { AppContext } from '../../contexts/appContext'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

// Styles
import {
  StyledColorWrapper,
  StyledColorOption,
  StyledInputWrapper,
  StyledSelectedColor
} from './ColorPicker.styles'

import { StyledModalWrapper } from '../Modal/Modal.styles'

const ColorPicker = () => {
  // State
  const [showPicker, setShowPicker] = useState(false)

  // Context
  const { color, changeColor } = useContext(AppContext)

  // Refs
  const colorPicker = useRef()
  const colorPickerSelected = useRef()

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
      key={colorOption}
      onClick={changeColor}
      className="color option"
      aria-label={colorOption}
      data-color={colorOption}
      colorOption={colorOption}
      selected={color === colorOption}
    />
  ))

  return (
    <StyledModalWrapper>
      {/* SELECTED COLOR / OPEN MENU */}

      <StyledSelectedColor
        color={color}
        ref={colorPickerSelected}
        aria-label={`Accent color ${color}`}
        onClick={() => setShowPicker(prevState => !prevState)}
      />

      {/* COLOR MODAL MENU */}

      {showPicker && (
        <NavModal ref={colorPicker} setShowModal={setShowPicker}>
          <StyledColorWrapper>
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
          </StyledColorWrapper>
        </NavModal>
      )}
    </StyledModalWrapper>
  )
}

export default ColorPicker
