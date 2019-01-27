import React, { Component } from 'react'
import ThemePicker from '../ThemePicker'
import ColorPicker from '../ColorPicker'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'

class Nav extends Component {
  render() {
    const { color, changeColor, changeTheme, saveSnap, shareSnap } = this.props
    return (
      <nav className="nav">
        <p className="logo">
          code<span className="accent">Snap</span>
        </p>
        <ThemePicker changeTheme={changeTheme} />
        <ColorPicker color={color} changeColor={changeColor} />
        <button className="save-snap" onClick={saveSnap}>
          <FontAwesomeIcon className="font-awesome" icon={faDownload} />
        </button>

        <button className="share-twitter" onClick={shareSnap}>
          <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
          Share
        </button>
      </nav>
    )
  }
}

export default Nav
