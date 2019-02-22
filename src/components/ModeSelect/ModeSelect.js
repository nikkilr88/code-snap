import React, { Component } from 'react'

class ModeSelect extends Component {
  render() {
    const { changeMode } = this.props
    return (
      <select name="mode" onChange={changeMode} defaultValue="javascript">
        <option value="go">Go</option>
        <option value="javascript">JavaScript</option>
        <option value="lua">Lua</option>
        <option value="python">Python</option>
      </select>
    )
  }
}

export default ModeSelect
