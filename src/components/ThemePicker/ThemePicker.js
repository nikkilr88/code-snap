import React, { Component, Fragment } from 'react'
import './ThemePicker.css'

class ThemePicker extends Component {
  state = {
    themes: [
      'monokai',
      'blackboard',
      'duotone-dark',
      'duotone-light',
      'xq-dark',
      'material',
      'mdn-like'
    ]
  }
  render() {
    const options = this.state.themes.map((theme, i) => (
      <option value={theme} key={i}>
        {theme}
      </option>
    ))
    return (
      <Fragment>
        <label>
          Theme:
          <select
            id="theme-picker"
            name="theme"
            onChange={this.props.changeTheme}
          >
            {options}
          </select>
        </label>
      </Fragment>
    )
  }
}

export default ThemePicker
