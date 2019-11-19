import React, { Component, useContext } from 'react'

// Contexts
import { AppContext } from '../../contexts/appContext'

const ModeSelect = () => {
  // Context
  const { changeMode } = useContext(AppContext)

  // Mode options
  const modes = [
    { mode: 'go', name: 'Go' },
    { mode: 'javascript', name: 'JavaScript' },
    { mode: 'lua', name: 'Lua' },
    { mode: 'python', name: 'Python' },
    { mode: 'php', name: 'PHP' },
    { mode: 'ruby', name: 'Ruby' }
  ]

  // Mode options JSX
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

export default ModeSelect
