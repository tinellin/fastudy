import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #2c5364, #203a43, #0f2027);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 11%;

    #card-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 350px;
      height: 350px;
      background-color: #f9f9f9;
      border-radius: 8px;
      margin: 30px;
      margin-bottom: 5%;

      #image {
        border-radius: 100px;
        width: 200px;
        height: 200px;
        border: 5px solid #007bff;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
          width: 170px;
          height: 170px;
          border-radius: 100px;
          border: 4px dashed #c7c7c7;
        }

        #user-img {
          display: none;
        }
      }

      h2 {
        margin-top: 3%;
      }

      #card-location {
        margin-top: 4%;
        display: flex;
        flex-direction: row;
        align-items: center;

        #icon {
          color: #007bff;
          font-size: 30px;
        }
      }
    }

    #card-date {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;

      width: 350px;
      height: 50px;
      background-color: #f9f9f9;
    }
  }

  #card-information {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 60px;

    width: 500px;
    height: 900px;
    background-color: #f9f9f9;

    #location {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      width: 500px;

      h3 {
        margin-top: 0;
      }

      #state {
        margin-right: 4%;
      }
    }

    h3 {
      align-self: baseline;
      margin-top: 4%;
    }

    h3:first-child {
      margin-top: 0%;
    }

    #password {
      h2 {
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-top: 10%;
        text-align: center;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
    height: 1350px;
    display: flex;
    flex-direction: column;

    #card-information {
      #country {
        width: 100%;
        margin-right: 40%;
        margin-top: 3%;
      }
    }

    section {
      width: 95%;
    }

    section #card-image {
      width: 350px;
      height: 320px;
      margin-bottom: 3%;
    }

    #card-information {
      width: 350px;
      height: 1100px;
      #location {
        width: 100%;
      }
    }

    section {
      margin-bottom: 5%;
    }
  }
`;
