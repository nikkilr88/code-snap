import React, { Fragment, useContext } from 'react'

// Context
import { AppContext } from '../../contexts/appContext'

// Components
import ThemePicker from '../ThemePicker'
import ColorPicker from '../ColorPicker'
import ModeSelect from '../ModeSelect'
import Loader from '../Loader'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'

const Nav = () => {
  const { saveSnap, shareSnap, uploading } = useContext(AppContext)

  return (
    <nav className="nav">
      <span className="logo">
        code<span className="accent">Snap</span>
      </span>

      <div className="nav-group">
        <ModeSelect />
        <ThemePicker />
        <ColorPicker />
      </div>

      <div className="nav-group">
        <button className="save-snap" onClick={saveSnap}>
          <FontAwesomeIcon className="font-awesome" icon={faDownload} />
        </button>

        <button className="share-twitter" onClick={shareSnap}>
          {!uploading ? (
            <Fragment>
              <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
              Share
            </Fragment>
          ) : (
            <Loader />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Nav
