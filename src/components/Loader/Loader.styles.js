import styled from 'styled-components'

export const StyledLoader = styled.div`
  border: 2px solid #fff;
  border-right: 2px solid transparent;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  animation: rotate 2s infinite;

  @keyframes rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`
