import React, { Component, Fragment } from 'react'

// Components
import CodeWrapper from '../CodeWrapper'
import Nav from '../Nav'

// Third-party packages
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

// Styles
import './App.css'

class App extends Component {
  state = {
    color: '#34495e',
    theme: 'monokai',
    mode: 'javascript',
    uploading: false,
    codeText: '// Pssst... Paste your code here'
  }

  // Update codeMirror text
  handleOnChange = val => {
    this.setState(() => ({ codeText: val }))
  }

  // Change code background color
  changeColor = e => {
    const color = e.target.dataset.color || '#' + e.target.value
    this.setState(() => ({ color }))
  }

  // Change CodeMirror theme
  changeTheme = e => {
    const theme = e.target.value
    this.setState(() => ({ theme }))
  }

  // Change CodeMirror language mode
  changeMode = e => {
    const mode = e.target.value
    this.setState(() => ({ mode }))
  }

  // Capture DOM screenshot
  domToImage = () => {
    const wrapper = document.querySelector('.code-wrapper')
    const scale = 1.5
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
  saveSnap = () => {
    this.domToImage().then(blob => {
      saveAs(blob, 'code-snap.png')
    })
  }

  // Share DOM screenshot to Twitter
  shareSnap = () => {
    // Set uploading to true to show spinner
    this.setState({
      uploading: true
    })

    // Capture screenshot
    this.domToImage()
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
            this.setState({
              uploading: false
            })
          })
          .catch(err => console.log('Opps, something went wrong...'))
      })
  }

  render() {
    return (
      <Fragment>
        <Nav
          color={this.state.color}
          changeColor={this.changeColor}
          changeTheme={this.changeTheme}
          changeMode={this.changeMode}
          saveSnap={this.saveSnap}
          shareSnap={this.shareSnap}
          uploading={this.state.uploading}
        />

        <CodeWrapper
          mode={this.state.mode}
          color={this.state.color}
          theme={this.state.theme}
          codeText={this.state.codeText}
          handleOnChange={this.handleOnChange}
        />
      </Fragment>
    )
  }
}

export default App
