import styled from 'styled-components'

export const StyledCodeWrapper = styled.div`
  margin: 150px auto 0;
  padding: 50px;
  width: auto;
  max-width: 700px;
  display: table;
  background: ${props => props.color};

  .CodeMirror {
    height: auto;
    width: auto;
    text-align: left;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    line-height: 1.5;
    font-family: ${props => props.font}, monospace;
    font-variant-ligatures: contextual;
  }

  .CodeMirror-scroll {
    overflow: hidden !important;
  }

  .CodeMirror-selected {
    width: 100% !important;
    left: 0 !important;
    right: 0 !important;
  }

  .CodeMirror-lines {
    padding: 15px !important;
  }
`

export const StyledHelpMessage = styled.p`
  text-align: center;
  font-size: 14px;
  margin-top: 25px;
  color: #777;

  span {
    border: 2px solid #ccc;
    box-shadow: 2px 2px 0 #ccc;
    padding: 1px 3px;
    font-weight: bold;
    color: #777;
  }
`
