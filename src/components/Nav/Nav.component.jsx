import React, { Fragment, useContext, useState, useRef } from 'react'

// Context
import { AppContext } from '../../contexts/appContext'

// Components
import ThemePicker from '../ThemePicker'
import ColorPicker from '../ColorPicker'
import ModeSelect from '../ModeSelect'
import Loader from '../Loader'
import NavModal from '../Modal/Modal.component'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'

// Styles
import { StyledNav, StyledDownloadOptions } from './Nav.styles'
import { StyledModalWrapper } from '../Modal/Modal.styles'

const Nav = () => {
  // State
  const [showDownloadOptions, setShowDownloadOptions] = useState(false)

  // Context
  const { saveSnap, shareSnap, uploading } = useContext(AppContext)

  // Refs
  const downloadOptions = useRef()

  return (
    <StyledNav>
      {/* LOGO */}

      <p className="logo">
        code<span className="accent">Snap</span>
      </p>

      {/* THEME & COLOR OPTIONS */}

      <div className="nav-group">
        <ModeSelect />
        <ThemePicker />
        <ColorPicker />
      </div>

      {/* BUTTONS */}

      <div className="nav-group">
        <StyledModalWrapper>
          {/* DOWNLOAD BUTTON */}

          <button
            className="save-snap nav-button"
            onClick={() => setShowDownloadOptions(prevState => !prevState)}
          >
            <FontAwesomeIcon className="font-awesome" icon={faDownload} />{' '}
            Download
          </button>

          {/* DOWNLOAD OPTIONS MODAL MENU */}

          {showDownloadOptions && (
            <NavModal
              ref={downloadOptions}
              setShowModal={setShowDownloadOptions}
            >
              <StyledDownloadOptions>
                <button onClick={saveSnap}>Download PNG</button>
                <button disabled>Download SVG</button>
              </StyledDownloadOptions>
            </NavModal>
          )}
        </StyledModalWrapper>

        {/* TWITTER SHARE BUTTON */}

        <button
          onClick={shareSnap}
          aria-label="Share to Twitter"
          className="share-twitter nav-button"
        >
          {uploading ? (
            <Loader />
          ) : (
            <Fragment>
              <FontAwesomeIcon className="font-awesome" icon={faTwitter} />
              Share
            </Fragment>
          )}
        </button>
      </div>
    </StyledNav>
  )
}

export default Nav
