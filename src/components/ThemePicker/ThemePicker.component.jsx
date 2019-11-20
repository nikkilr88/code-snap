import React, { useContext } from 'react'

// Context
import { AppContext } from '../../contexts/appContext'

const ThemePicker = () => {
  // Context
  const { changeTheme } = useContext(AppContext)

  // Theme options
  const themes = [
    { theme: 'monokai', name: 'Monokai', type: 'dark' },
    { theme: 'blackboard', name: 'Blackboard', type: 'dark' },
    { theme: 'duotone-dark', name: 'Duotone Dark', type: 'dark' },
    { theme: 'duotone-light', name: 'Duotone Light', type: 'light' },
    { theme: 'xq-dark', name: 'XQ Dark', type: 'dark' },
    { theme: 'material', name: 'Material', type: 'dark' },
    { theme: 'mdn-like', name: 'MDN Like', type: 'light' },
    { theme: 'darcula', name: 'Darcula', type: 'dark' },
    { theme: 'dracula', name: 'Dracula', type: 'dark' },
    { theme: 'icecoder', name: 'Ice Coder', type: 'dark' }
  ]

  // Theme options JSX
  const renderOptionGroups = () => {
    const lightThemes = [],
      darkThemes = []

    themes
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((theme, i) => {
        const option = (
          <option value={theme.theme} key={i}>
            {theme.name}
          </option>
        )

        if (theme.type === 'dark') {
          darkThemes.push(option)
        } else {
          lightThemes.push(option)
        }
      })

    return (
      <select
        name="theme"
        id="theme-picker"
        defaultValue="monokai"
        onChange={changeTheme}
        aria-label="Code editor theme"
      >
        <optgroup label="Dark Themes">{darkThemes}</optgroup>
        <optgroup label="Light Themes">{lightThemes}</optgroup>
      </select>
    )
  }

  return renderOptionGroups()
}

export default ThemePicker
