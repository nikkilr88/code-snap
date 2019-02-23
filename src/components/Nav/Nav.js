import React, { Component } from 'react'
import ThemePicker from '../ThemePicker'
import ColorPicker from '../ColorPicker'
import ModeSelect from '../ModeSelect'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'

class Nav extends Component {
  render() {
    const {
      color,
      changeMode,
      changeColor,
      changeTheme,
      saveSnap,
      shareSnap
    } = this.props
    return (
      <nav className="nav">
        <p className="logo">
          code<span className="accent">Snap</span>
        </p>
        <div className="nav-group">
          <ModeSelect changeMode={changeMode} />
          <ThemePicker changeTheme={changeTheme} />
          <ColorPicker color={color} changeColor={changeColor} />
        </div>

        <div className="nav-group">
          <button className="save-snap" onClick={saveSnap}>
            <FontAwesomeIcon className="font-awesome" icon={faDownload} />
          </button>

          <button className="share-twitter" onClick={shareSnap}>
            <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
            Share
          </button>
        </div>
      </nav>
    )
  }
}

export default Nav
