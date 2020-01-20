import React, { useState, createContext, useRef } from 'react'

// Third-party packages
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

// Context
export const AppContext = createContext()

// Provider
export const AppProvider = props => {
  // State
  const [color, setColor] = useState('#34495e')
  const [theme, setTheme] = useState('darcula')
  const [mode, setMode] = useState('javascript')
  const [font, setFont] = useState('')
  const [uploading, setUploading] = useState(false)
  const [codeText, setCodeText] = useState('// Pssst... Paste your code here')

  // Refs
  const codeWrapper = useRef()

  // Update codeMirror text
  const handleOnChange = val => {
    setCodeText(val)
  }

  // Change code background color
  const changeColor = e => {
    const color = e.target.dataset.color || '#' + e.target.value
    setColor(color)
  }

  // Change CodeMirror theme
  const changeTheme = e => {
    const theme = e.target.value
    setTheme(theme)
  }

  // Change CodeMirror language mode
  const changeMode = e => {
    const mode = e.target.value
    setMode(mode)
  }

  // Generate date for image file name
  const generateFileNameDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return `${month}-${day}-${year}_${hour}-${minutes}`
  }

  // Generate dom-to-image settings
  const generateDomToImageSettings = () => {
    const scale = 2

    return {
      style: {
        margin: '0',
        transform: `scale(${scale})`,
        transformOrigin: 'top left'
      },
      width: codeWrapper.current.clientWidth * scale,
      height: codeWrapper.current.clientHeight * scale
    }
  }

  // Download SVG
  const saveSVG = () => {
    domtoimage
      .toSvg(codeWrapper.current, generateDomToImageSettings())
      .then(dataUrl => {
        saveAs(dataUrl, `code-snap_${generateFileNameDate()}.svg`)
      })
  }

  // Save DOM image to computer
  const savePNG = () => {
    domtoimage
      .toBlob(codeWrapper.current, generateDomToImageSettings())
      .then(blob => {
        saveAs(blob, `code-snap_${generateFileNameDate()}.png`)
      })
  }

  // Share DOM screenshot to Twitter
  const shareSnap = () => {
    // Set uploading to true to show spinner
    setUploading(true)

    // Capture screenshot
    domtoimage
      .toBlob(codeWrapper.current, generateDomToImageSettings())
      // Send blob data to backend to upload to Twitter
      .then(blob => {
        const formData = new FormData()
        formData.append('upl', blob)

        fetch('https://code-snap.glitch.me/', {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            // Open Twitter post popup with direct image link
            window.open(
              `https://twitter.com/intent/tweet?text=${data.imageURL}`,
              '_blank',
              'width=600,height=300'
            )
            // Set uploading as false to hide spinner
            setUploading(false)
          })
          .catch(error => console.log(`Opps, something went wrong... ${error}`))
      })
  }

  return (
    <AppContext.Provider
      value={{
        font,
        color,
        changeColor,
        theme,
        changeTheme,
        mode,
        changeMode,
        uploading,
        setUploading,
        codeText,
        setCodeText,
        savePNG,
        shareSnap,
        saveSVG,
        codeWrapper
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
