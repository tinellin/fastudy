import styled from 'styled-components';

export const Nav = styled.header`
  height: 14vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  #logo {
    margin-top: 8%;
    margin-right: 8%;
  }

  img {
    margin-top: 12%;
  }

  div-button {
    position: relative;
    overflow: hidden;
  }

  button {
    background-color: #007bff;
    width: 168px;
    height: 63px;
    border: none;
    color: white;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 22px;
    cursor: pointer;
    position: relative;
    font-weight: bolder;
    transition: 0.5s all;

    :hover {
      background-color: #006ce0;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 15vh;

    #logo img {
      width: 200px;
      height: 100%;
    }

    #logo {
      margin-top: 8%;
      margin-right: 0%;
    }

    button {
      width: 140px;
      height: 63px;
    }
  }
`;

export const Slogan = styled.div`
  margin-top: 8%;
  height: 70vh;

  #first-content {
    width: 99vw;
    height: 70vh;

    #slogan {
      position: absolute;
      left: 5%;
    }

    .sideImg {
      position: absolute;
      right: 2%;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 40vh;
    #first-content {
      #slogan {
        width: 380px;
        height: 300px;
        left: 0%;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.5%;
  height: 90vh;

  #background {
    width: 97.5%;
    height: 95vh;
    position: absolute;
    z-index: -2;
    background-color: #b9d5fd;
    transform: rotate(-3.2deg);
  }

  b {
    color: #007bff;
    font-weight: bold;
    font-size: 24px;
  }

  h1 {
    margin-top: 3%;
    margin-bottom: 2%;
    color: black;
    font-size: 40px;
  }

  #second-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3%;

    .objective {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;

      h2 {
        margin-top: 8%;
      }

      p {
        text-align: center;
        padding: 25px;
        font-size: 18px;
      }
    }
  }

  #third-content {
    margin-top: 12%;
    width: 100%;
    height: 1300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #offer {
      margin-left: 12%;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width: 100%;
      position: relative;

      .arrow {
        width: 600px;
        position: absolute;
        right: 53%;
        top: -8%;
      }

      p {
        text-align: justify;
        font-size: 25px;
      }
    }
  }

  #correct-container {
    margin-top: 10%;
    margin-bottom: 3%;

    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    #correct {
      width: 90%;
      display: flex;
      flex-direction: row;
      align-items: center;

      #p-correct {
        margin-right: 15%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        position: relative;

        p {
          text-align: justify;
          font-size: 25px;
        }
      }
    }
  }

  #h1-researcher {
    margin-top: 7%;
  }

  #researches {
    margin-top: 4%;
    display: flex;
    flex-direction: row;
    width: 86%;

    img {
      position: absolute;
      top: -190px;
      left: -270px;
      z-index: -1;
    }

    .break {
      position: relative;
      display: flex;
      flex-direction: row;

      h2 {
        font-size: 70px;
        color: #007bff;
      }

      h3 {
        margin-left: 2.5%;
        font-size: 35px;
      }
    }

    p {
      margin-top: 5%;
      font-size: 25px;
    }

    .researcher-card {
      margin: 65px;
    }
  }

  #final-message {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 16%;

    p {
      font-size: 25px;
    }
  }

  #signup {
    margin-top: 7%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .img-signup {
      width: 950px;
    }

    .btn-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 75%;
      text-decoration: none;
    }

    button {
      margin-top: 4%;
      width: 305px;
      height: 140px;

      border: none;
      background-color: #0072ee;
      color: white;
      font-size: 40px;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    #background {
      width: 97.5%;
      height: 1100px;
      position: absolute;
      transform: rotate(0deg);
    }

    h1 {
      font-size: 25px;
    }

    #second-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 1%;

      .objective {
        width: 100%;

        .img-objective {
          width: 150px;
        }

        h2 {
          font-size: 20px;
          text-align: center;
        }

        p {
          text-align: center;
          font-size: 15px;
        }
      }
    }

    #third-content {
      margin-top: 12%;
      margin-right: 5%;
      width: 100%;

      #offer {
        margin-left: 6%;
        .arrow {
          width: 533px;
          position: absolute;
          left: -26%;
          top: 10%;
          transform: rotate(90deg);
        }

        h1 {
          font-size: 23px;
        }

        p {
          margin-top: 3%;
          font-size: 15px;
        }
        b {
          font-size: 15px;
        }
      }
    }

    #correct-container {
      margin-top: 10%;
      margin-bottom: 5%;

      width: 100%;
      height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;

      #correct {
        width: 100%;
        padding: 9px;
        #p-correct {
          width: 100%;
          margin-right: 0%;
          align-items: center;
          h1 {
            font-size: 23px;
          }
          p {
            margin-top: 3%;

            font-size: 15px;
          }
          b {
            font-size: 15px;
          }
        }
      }
    }

    #h1-researcher {
      font-size: 18px;
      text-align: center;
    }

    #researches {
      margin-top: 4%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 95%;

      .researcher-card {
        margin-bottom: 29%;
      }

      img {
        width: 365px;
        left: -47px;
        top: -65px;
      }

      .break {
        h2 {
          font-size: 50px;
        }

        h3 {
          font-size: 25px;
        }
      }

      p {
        text-align: center;
        font-size: 20px;
      }

      b {
        text-align: center;
        font-size: 20px;
      }
    }

    #final-message {
      width: 80%;

      h1 {
        font-size: 20px;
      }
      p {
        margin-top: 8%;
        font-size: 16px;
        text-align: justify;
      }
    }

    #signup {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .img-signup {
        margin-top: 5%;
        width: 368px;
      }

      button {
        width: 250px;
        height: 70px;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: #007bff;
  width: 80%;
  height: 300px;
  margin-top: 13%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  #software {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 15%;
    width: 500px;
    height: 50px;
    background-color: white;
    color: black;
    cursor: pointer;

    #fast {
      margin-left: 1%;
      color: #007bff;
      font-size: 22px;
    }
  }

  h1 {
    margin-left: 10%;
  }

  #icon-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;

    h2 {
      margin-left: 5%;
      font-size: 28px;
      color: white;
    }

    #icons {
      width: 20%;

      .social-icon {
        font-size: 50px;
        margin: 15px;
        cursor: pointer;
        color: white;
        margin-right: 5%;

        :hover {
          color: #e8e8e8;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;

    #icon-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 150px;
      font-size: 50px;

      #icons {
        display: flex;
        flex-direction: row;
        width: 45%;

        .social-icon {
          font-size: 34px;
        }
      }
    }
  }
`;
