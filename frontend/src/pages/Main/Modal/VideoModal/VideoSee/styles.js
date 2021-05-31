import styled from 'styled-components';

export const VideoContainer = styled.div`
  padding: 50px;

  #video {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    align-self: baseline;
    font-size: 26px;
    margin-bottom: 1%;
  }

  video {
    width: 100%;
    height: 100%;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  h2 {
    text-align: center;
    font-size: 22px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 1%;
  }

  #description {
    width: 100%;
    font-size: 18px;
    text-align: justify;
  }

  #material {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    height: 210px;
    margin-top: 2%;
    align-self: baseline;
    background-color: #007bff;
    border-radius: 4px;
    color: white;
    position: relative;
    z-index: 1;

    p {
      font-size: 17px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 2.3%;
    }

    #download {
      width: 80%;
      height: 25px;
      background-color: #007bff;
      border: none;
      cursor: pointer;
      transition: 0.5s all;
      text-decoration: none;
      margin-top: 2.5%;
      :hover span {
        color: #007bff;
      }

      #material-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        span {
          font-size: 16px;
          color: white;
        }

        #icon {
          font-size: 20px;
          color: white;
          margin-right: 3%;
        }
      }
    }
  }

  #material::after {
    content: '';
    width: 98%;
    height: 210px;
    border: 2px dashed #007bff;
    position: absolute;
    left: 3.3%;
    top: 2%;
    z-index: -1;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 5px;

    h1 {
      align-self: center;
      font-size: 23px;
    }

    h2 {
      font-size: 19px;
    }

    #description {
      width: 100%;
      font-size: 16px;
      text-align: justify;
    }

    #material {
      width: 100%;
    }
  }
`;
