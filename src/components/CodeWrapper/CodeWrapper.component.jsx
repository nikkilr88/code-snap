import React, { Fragment, useContext, useEffect } from 'react'

// Contexts
import { AppContext } from '../../contexts/appContext'

// Third-party libraries
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
require('codemirror/mode/php/php.js')
require('codemirror/mode/ruby/ruby.js')

// Themes
require('codemirror/theme/blackboard.css')
require('codemirror/theme/monokai.css')
require('codemirror/theme/material.css')
require('codemirror/theme/mdn-like.css')
require('codemirror/theme/xq-dark.css')
require('codemirror/theme/duotone-dark.css')
require('codemirror/theme/duotone-light.css')
require('codemirror/theme/darcula.css')
require('codemirror/theme/dracula.css')
require('codemirror/theme/icecoder.css')

// Styles
import { StyledCodeWrapper, StyledHelpMessage } from './CodeWrapper.styles'

const CodeWrapper = () => {
  // Context
  const { font, mode, theme, color, codeText, setCodeText } = useContext(
    AppContext
  )

  const options = {
    mode,
    theme,
    lineNumbers: false,
    lineWrapping: true,
    autoCloseBrackets: true
  }

  // Allow user to press ESC to unfocus code editor
  const unfocusCodeMirror = event => {
    const codeMirrorFocused = event.target.tagName === 'TEXTAREA'

    // HACK: Is there a better way to reset focus?
    if (event.key === 'Escape' && codeMirrorFocused) {
      const temp = document.createElement('input')
      document.body.appendChild(temp)
      temp.focus()
      document.body.removeChild(temp)
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', unfocusCodeMirror)
  }, [])

  return (
    <Fragment>
      <StyledCodeWrapper color={color} font={font} className="code-wrapper">
        <CodeMirror
          value={codeText}
          options={options}
          onBeforeChange={(editor, data, value) => {
            setCodeText(value)
          }}
        />
      </StyledCodeWrapper>
      <StyledHelpMessage>
        Press <span>ESC</span> to unfocus code editor.
      </StyledHelpMessage>
    </Fragment>
  )
}

export default CodeWrapper
