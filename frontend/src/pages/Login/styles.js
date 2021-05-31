import styled from 'styled-components';
import { FinalMessage } from '../../templates/Button/styles';
import background from './login.png';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${background});
  // background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
  background-position: center;

  .animation {
    width: 35%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #container-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8ff;
    width: 75%;
    height: 90%;
    border-radius: 8px;
    box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.75);
  }

  p {
    margin-top: 12%;
    font-size: 38px;
    font-weight: 300;
  }

  #senha {
    align-self: flex-end;
    margin-right: 16%;
    margin-top: 2%;
    font-size: 16px;
    text-decoration: none;
    color: #007bff;
  }

  #senha:hover {
    color: blue;
  }

  font-size: 24px;

  .link-entrar {
    text-decoration: none;
    font-weight: 300;
    color: gray;
  }

  .link-entrar:hover {
    color: #007bff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .animation {
      height: 70%;
      width: 100%;
    }

    #container-login {
      width: 94%;
    }

    ${FinalMessage} {
      font-size: 20px;
    }
  }
`;
