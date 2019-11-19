import React, { useState, createContext } from 'react'

// Third-party packages
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

// Context
export const AppContext = createContext()

// Provider
export const AppProvider = props => {
  // State
  const [color, setColor] = useState('#34495e')
  const [theme, setTheme] = useState('monokai')
  const [mode, setMode] = useState('javascript')
  const [uploading, setUploading] = useState(false)
  const [codeText, setCodeText] = useState('// Pssst... Paste your code here')

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

  // Capture DOM screenshot
  const domToImage = () => {
    const wrapper = document.querySelector('.code-wrapper')
    const scale = 2

    return domtoimage.toBlob(wrapper, {
      style: {
        margin: '0',
        transform: `scale(${scale})`,
        transformOrigin: 'top left'
      },
      width: wrapper.clientWidth * scale,
      height: wrapper.clientHeight * scale
    })
  }

  // Save DOM image to computer
  // TODO: Add download format options
  const saveSnap = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    domToImage().then(blob => {
      saveAs(blob, `code-snap_${month}-${day}-${year}_${hour}-${minutes}.png`)
    })
  }

  // Share DOM screenshot to Twitter
  const shareSnap = () => {
    // Set uploading to true to show spinner
    setUploading(true)

    // Capture screenshot
    domToImage()
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
        saveSnap,
        shareSnap
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
