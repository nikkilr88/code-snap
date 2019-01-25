import React, { Component } from 'react'
import ThemePicker from '../ThemePicker'
import ColorPicker from '../ColorPicker'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {
  render() {
    const { color, changeColor, changeTheme, saveSnap } = this.props
    return (
      <nav className="nav">
        <p className="logo">
          code<span className="accent">Snap</span>
        </p>
        <ThemePicker changeTheme={changeTheme} />
        <ColorPicker color={color} changeColor={changeColor} />
        <button onClick={saveSnap}>
          <FontAwesomeIcon className="font-awesome" icon={faDownload} />
        </button>
      </nav>
    )
  }
}

export default Nav
