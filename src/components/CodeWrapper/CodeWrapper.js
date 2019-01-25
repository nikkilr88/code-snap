import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

// CodeMirror Shizz
require('codemirror/mode/javascript/javascript.js')
require('codemirror/lib/codemirror.css')

// Themes
require('codemirror/theme/blackboard.css')
require('codemirror/theme/monokai.css')
require('codemirror/theme/material.css')
require('codemirror/theme/mdn-like.css')
require('codemirror/theme/xq-dark.css')
require('codemirror/theme/duotone-dark.css')
require('codemirror/theme/duotone-light.css')

import './CodeWrapper.css'

class CodeWrapper extends Component {
  render() {
    const { theme, handleOnChange, color } = this.props

    const options = {
      lineNumbers: false,
      mode: 'javascript',
      lineWrapping: true,
      theme: theme
    }

    return (
      <div style={{ background: color }} className="code-wrapper">
        <CodeMirror
          value={this.props.codeText}
          options={options}
          onBeforeChange={(editor, data, value) => {
            handleOnChange(value)
          }}
        />
      </div>
    )
  }
}

export default CodeWrapper
