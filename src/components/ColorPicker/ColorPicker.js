import React, { useState, useContext, useEffect, useRef } from 'react'

// Context
import { AppContext } from '../../contexts/appContext'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const ColorPicker = () => {
  // State
  const [showPicker, setShowPicker] = useState(false)

  // Context
  const { color, changeColor } = useContext(AppContext)

  // Refs
  const colorPicker = useRef()

  // Toggle picker options visibility
  const togglePicker = e => {
    const btnClick = !e.target.classList.contains('selected')
    const clickInside =
      colorPicker.current && colorPicker.current.contains(e.target)

    setShowPicker(prevState =>
      clickInside ? true : btnClick ? false : !prevState
    )
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
  const colorOptions = colors.map((color, i) => (
    <span
      key={color}
      data-color={color}
      onClick={changeColor}
      className="color option"
      style={{
        background: color,
        border: color === '#ffffff' ? '2px solid #ccc' : '2px solid #fff'
      }}
    />
  ))

  // Add event listener on mount
  useEffect(() => {
    document.addEventListener('click', togglePicker, false)

    // Remove event listener before unmount
    return () => {
      document.removeEventListener('click', togglePicker, false)
    }
  }, [])

  return (
    <div className="color-picker-wrapper">
      <div className="color selected" style={{ background: color }} />

      {showPicker && (
        <div className="color-picker" ref={colorPicker}>
          <div className="colors">{colorOptions}</div>

          <div className="input-wrapper">
            <div className="icon-wrapper">
              <FontAwesomeIcon className="hashtag" icon={faHashtag} />
            </div>

            <input
              className="color-input"
              type="text"
              onChange={changeColor}
              value={color.replace('#', '')}
              maxLength="6"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ColorPicker
