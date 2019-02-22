import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

// CodeMirror CSS
require('codemirror/lib/codemirror.css')

// Auto close brackets
require('codemirror/addon/edit/closebrackets.js')

// Modes
require('codemirror/mode/javascript/javascript.js')
require('codemirror/mode/lua/lua.js')
require('codemirror/mode/go/go.js')
require('codemirror/mode/python/python.js')

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
    const { mode, theme, handleOnChange, color } = this.props

    const options = {
      lineNumbers: false,
      mode: mode,
      lineWrapping: true,
      autoCloseBrackets: true,
      theme: theme
    }

    const bgColor = {
      background: color
    }

    return (
      <div style={bgColor} className="code-wrapper">
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
