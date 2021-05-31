import styled from 'styled-components';
import { Card } from './Card/styles';
import background from './register.png';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  //background: linear-gradient(to top, #2980b9, #2c3e50);
  background-position: center;
  height: 100vh;

  #logo {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 6%;
  }

  .animation {
    width: 35%;
    height: 86%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #container-signup {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 75%;
    height: 108%;
    border-radius: 8px;
    box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.75);
    margin-top: 2%;

    h2 {
      margin-top: 6%;
      font-size: 28px;
      font-weight: bold;
    }

    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 33%;
      width: 100%;
      height: 100%;

      h1 {
        margin-top: 10%;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 105vh;

    #logo {
      position: absolute;
      top: 0%;
    }

    .animation {
      width: 100%;
      height: 100%;

      h2 {
        font-size: 5px;
      }
    }

    #container-signup {
      width: 90%;
      height: 100%;

      #content {
        margin-top: 47%;
      }
    }

    ${Card} {
      width: 300px;
    }
  }
`;
