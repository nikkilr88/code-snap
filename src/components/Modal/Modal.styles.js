import styled from 'styled-components'

// ! WRAPPER
export const StyledModalWrapper = styled.div`
  position: relative;
  display: flex;
`

// ! COLOR PICKER
export const StyledModal = styled.div`
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
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
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`
