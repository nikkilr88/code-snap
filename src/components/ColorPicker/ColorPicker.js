import React, { Component } from 'react'

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
    const clickOut = !e.target.classList.contains('selected')

    const colorClick = e.target.classList.contains('option')

    this.setState(prevState => ({
      showPicker: colorClick ? true : clickOut ? false : !prevState.showPicker
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
        style={{ background: color }}
        onClick={changeColor}
      />
    ))
    return (
      <div className="color-picker-wrapper">
        <label>
          Background:
          <div className="color selected" style={{ background: color }} />
        </label>

        {this.state.showPicker && <div className="color-picker">{colors}</div>}
      </div>
    )
  }
}

export default ColorPicker
