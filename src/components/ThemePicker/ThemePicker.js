import React, { useContext } from 'react'

// Context
import { AppContext } from '../../contexts/appContext'

const ThemePicker = () => {
  // Context
  const { changeTheme } = useContext(AppContext)

  // Theme options
  const themes = [
    { theme: 'monokai', name: 'Monokai' },
    { theme: 'blackboard', name: 'Blackboard' },
    { theme: 'duotone-dark', name: 'Duotone Dark' },
    { theme: 'duotone-light', name: 'Duotone Light' },
    { theme: 'xq-dark', name: 'XQ Dark' },
    { theme: 'material', name: 'Material' },
    { theme: 'mdn-like', name: 'MDN Like' },
    { theme: 'darcula', name: 'Darcula' },
    { theme: 'dracula', name: 'Dracula' },
    { theme: 'icecoder', name: 'Ice Coder' }
  ]

  // Theme options JSX
  const options = themes
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((theme, i) => (
      <option value={theme.theme} key={i}>
        {theme.name}
      </option>
    ))

  return (
    <select
      id="theme-picker"
      name="theme"
      onChange={changeTheme}
      defaultValue="monokai"
    >
      {options}
    </select>
  )
}

// class ThemePicker extends Component {
//   render() {
//     const themes = [
//       { theme: 'monokai', name: 'Monokai' },
//       { theme: 'blackboard', name: 'Blackboard' },
//       { theme: 'duotone-dark', name: 'Duotone Dark' },
//       { theme: 'duotone-light', name: 'Duotone Light' },
//       { theme: 'xq-dark', name: 'XQ Dark' },
//       { theme: 'material', name: 'Material' },
//       { theme: 'mdn-like', name: 'MDN Like' },
//       { theme: 'darcula', name: 'Darcula' },
//       { theme: 'dracula', name: 'Dracula' },
//       { theme: 'icecoder', name: 'Ice Coder' }
//     ]

//     const options = themes
//       .sort((a, b) => a.name.localeCompare(b.name))
//       .map((theme, i) => (
//         <option value={theme.theme} key={i}>
//           {theme.name}
//         </option>
//       ))

//     return (
//       <select
//         id="theme-picker"
//         name="theme"
//         onChange={this.props.changeTheme}
//         defaultValue="monokai"
//       >
//         {options}
//       </select>
//     )
//   }
// }

export default ThemePicker
