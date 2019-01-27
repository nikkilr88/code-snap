import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

class ColorPicker extends Component {
  state = {
    showPicker: false,
    colors: [
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
  }

  togglePicker = e => {
    const btnClick = !e.target.classList.contains('selected')
    const clickInside = this.colorPicker && this.colorPicker.contains(e.target)

    this.setState(prevState => ({
      showPicker: clickInside ? true : btnClick ? false : !prevState.showPicker
    }))
  }

  componentDidMount() {
    document.addEventListener('click', this.togglePicker, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.togglePicker, false)
  }

  render() {
    const { color, changeColor } = this.props

    const colors = this.state.colors.map((color, i) => (
      <span
        className="color option"
        key={i}
        data-color={color}
        style={{
          background: color,
          border: color === '#ffffff' ? '2px solid #ccc' : '2px solid #fff'
        }}
        onClick={changeColor}
      />
    ))
    return (
      <div className="color-picker-wrapper">
        <label>
          Background:
          <div className="color selected" style={{ background: color }} />
        </label>

        {this.state.showPicker && (
          <div
            className="color-picker"
            ref={picker => (this.colorPicker = picker)}
          >
            <div className="colors">{colors}</div>

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
}

export default ColorPicker
