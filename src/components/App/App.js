import React, { Component, Fragment } from 'react'
import CodeWrapper from '../CodeWrapper'
import Nav from '../Nav'
import axios from 'axios'

// Lib
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

import './App.css'

class App extends Component {
  state = {
    color: '#34495e',
    theme: 'monokai',
    codeText: '// Pssst... Paste your code here'
  }

  handleOnChange = val => {
    this.setState(() => ({ codeText: val }))
  }

  changeColor = e => {
    const color = e.target.dataset.color
    this.setState(() => ({ color }))
  }

  changeTheme = e => {
    const { name, value } = e.target
    this.setState(() => ({ [name]: value }))
  }

  saveSnap = () => {
    const wrapper = document.querySelector('.code-wrapper')
    domtoimage
      .toBlob(wrapper, {
        style: { margin: '0' }
      })
      .then(function(blob) {
        saveAs(blob, 'code-snap.png')
      })
  }

  sendSnap = () => {
    const wrapper = document.querySelector('.transparent')
    domtoimage
      .toBlob(wrapper, {
        style: { margin: '0' }
      })
      .then(function(blob) {
        const formData = new FormData()
        formData.append('upl', blob)

        fetch('https://beautiful-pig.glitch.me/', {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            window.open(
              `https://twitter.com/intent/tweet?text=${data.imageURL}`
            )
          })
          .catch(err => console.log(err))
      })
  }

  render() {
    return (
      <Fragment>
        <Nav
          color={this.state.color}
          changeColor={this.changeColor}
          changeTheme={this.changeTheme}
          saveSnap={this.saveSnap}
          sendSnap={this.sendSnap}
        />

        <CodeWrapper
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
