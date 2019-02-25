import React, { Component, Fragment } from 'react'
import CodeWrapper from '../CodeWrapper'
import Nav from '../Nav'

import axios from 'axios'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import './App.css'

class App extends Component {
  state = {
    color: '#34495e',
    theme: 'monokai',
    mode: 'javascript',
    codeText: '// Pssst... Paste your code here'
  }

  handleOnChange = val => {
    this.setState(() => ({ codeText: val }))
  }

  changeColor = e => {
    console.log(e.target.value)
    const color = e.target.dataset.color || '#' + e.target.value
    this.setState(() => ({ color }))
  }

  changeTheme = e => {
    const theme = e.target.value
    this.setState(() => ({ theme }))
  }

  changeMode = e => {
    const mode = e.target.value
    this.setState(() => ({ mode }))
  }

  domToImage = () => {
    const wrapper = document.querySelector('.code-wrapper')
    const scale = 1.2
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

  saveSnap = () => {
    this.domToImage().then(blob => {
      saveAs(blob, 'code-snap.png')
    })
  }

  shareSnap = () => {
    this.domToImage().then(blob => {
      const formData = new FormData()
      formData.append('upl', blob)

      fetch('https://code-snap.glitch.me/', {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          window.open(
            `https://twitter.com/intent/tweet?text=${data.imageURL}`,
            '_blank',
            'width=600,height=300'
          )
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
