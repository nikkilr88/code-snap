import styled from 'styled-components'

// ! WRAPPER
export const StyledColorPickerWrapper = styled.div`
  position: relative;
  display: flex;

  .colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .color {
    margin: 3px;
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  .color.selected {
    padding: 0;
    margin: 0;
    border: 2px solid #444;
    background: ${props => props.color};
  }

  .selected {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
  }
`

// ! COLOR PICKER
export const StyledColorPickerModal = styled.div`
  position: absolute;
  top: 55px;
  right: -36px;
  width: 230px;
  padding: 5px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 999;

  &:after {
    content: '';
    position: absolute;
    top: -8px;
    right: 47px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
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
