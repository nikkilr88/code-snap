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
      <p className="logo">
        code<span className="accent">Snap</span>
      </p>

      <div className="nav-group">
        <ModeSelect />
        <ThemePicker />
        <ColorPicker />
      </div>

      <div className="nav-group">
        <StyledModalWrapper>
          <button
            className="save-snap nav-button"
            onClick={() => setShowDownloadOptions(prevState => !prevState)}
          >
            <FontAwesomeIcon className="font-awesome" icon={faDownload} />{' '}
            Download
          </button>
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

        <button className="share-twitter nav-button" onClick={shareSnap}>
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
    </StyledNav>
  )
}

export default Nav
