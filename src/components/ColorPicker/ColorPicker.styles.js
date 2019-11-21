import styled, { css } from 'styled-components'

// ! SHARED STYLES
const colorStyles = css`
  margin: 3px;
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`

// ! WRAPPER
export const StyledColorWrapper = styled.div`
  .colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const StyledSelectedColor = styled.button`
  ${colorStyles}

  padding: 0;
  margin: 0;
  border: 2px solid #444;
  background: ${props => props.color};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
`

// ! COLOR OPTION BUTTON
export const StyledColorOption = styled.span`
  ${colorStyles}

  background: ${props => props.colorOption};
  border: ${({ colorOption, selected }) =>
    colorOption === '#ffffff'
      ? `2px solid #ccc`
      : selected
      ? `2px solid #fff`
      : `2px solid ${colorOption}`};

  box-shadow: ${props => props.selected && `0 0 0 2px #444`}
`

// ! INPUT WRAPPER
export const StyledInputWrapper = styled.div`
  margin: 10px 5px;
  display: flex;
  align-items: center;
  height: 40px;

  .icon-wrapper {
    height: 100%;
    padding: 10px;
    background: #ddd;
    border-radius: 10px 0 0 10px;
    flex: 0 0 50px;
  }

  .hashtag {
    background: #ddd;
    height: 100%;
    width: 100%;
    color: #777;
  }

  input {
    width: 100%;
    min-width: 0;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 0 10px 10px 0;
    color: #777;
    font-weight: bold;
    font-size: 16px;
    height: 100%;
    flex: 1 1 auto;
  }
`
