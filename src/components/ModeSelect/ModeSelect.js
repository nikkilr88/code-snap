import React, { Component } from 'react'

class ModeSelect extends Component {
  render() {
    const { changeMode } = this.props

    const modes = [
      { mode: 'go', name: 'Go' },
      { mode: 'javascript', name: 'JavaScript' },
      { mode: 'lua', name: 'Lua' },
      { mode: 'python', name: 'Python' },
      { mode: 'php', name: 'PHP' },
      { mode: 'ruby', name: 'Ruby' }
    ]

    const options = modes
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((mode, i) => (
        <option key={i} value={mode.mode}>
          {mode.name}
        </option>
      ))

    return (
      <select name="mode" onChange={changeMode} defaultValue="javascript">
        {options}
      </select>
    )
  }
}

export default ModeSelect
