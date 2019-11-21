import styled from 'styled-components'

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  padding: 25px 100px;
  background: #2b2b2b;
  border-bottom: 2px solid #eee;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;

  .logo {
    margin-right: auto;
    color: #eee;
    font-size: 18px;
  }

  .accent {
    color: #e74c3c;
    font-weight: bold;
  }

  .nav-button {
    margin: 0 5px;
    padding: 10px 20px;
    height: 40px;
    border: none;
    font-weight: bold;
    border-radius: 100px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.2), 0 15px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .save-snap {
    background: linear-gradient(to bottom right, #e67e22, #e74c3c);
    color: #fff;
  }

  .share-twitter {
    background: linear-gradient(to bottom right, #00acee, #2980b9);
    color: #fff;
  }

  .nav-group {
    display: flex;
    align-items: center;
    margin-right: 25px;
  }
`

export const StyledDownloadOptions = styled.div`
  width: 100%;

  button {
    display: block;
    width: 100%;
    padding: 20px;
    border: none;
    background: none;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
    color: #333;
    cursor: pointer;

    &:last-of-type {
      border: none;
    }

    &:hover {
      background: #e74c3c;
      color: #fff;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
