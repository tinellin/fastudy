import styled from 'styled-components';

export const HomeContent = styled.div`
  z-index: -2;
  background-color: transparent;
  height: 39vw;
  margin-top: 2%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  #home-container {
    width: 65vw;
    height: 65vh;
    background-color: white;
    border-radius: 10px;

    h1 {
      text-align: center;
      font-size: 50px;
      margin: 45px;
    }

    .icons-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .statistic {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        h2 {
          font-size: 50px;
        }

        h3 {
          color: #292b2c;
          padding: 4px;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 65px;
          width: 90px;
          height: 90px;
          margin: 12px 12px 12px 30px;
          color: white;
          border-radius: 100px;
        }

        #qtyEx {
          background-color: #007bff;
        }

        #right {
          background-color: #5cb85c;
        }

        #wrong {
          background-color: #d9534f;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
    height: 100%;
    width: 100%;

    #home-container {
      width: 100%;

      .icons-container {
        display: flex;
        flex-direction: column;

        .statistic {
          display: flex;
          flex-direction: row;
          margin: 7px;

          h2 {
            font-size: 40px;
          }

          h3 {
            font-size: 20px;
          }

          .icon {
            width: 60px;
            height: 60px;
            margin: 5px;
            font-size: 45px;
          }
        }
      }
    }

    #home-container h1 {
      font-size: 28px;
      margin: 0px;
      margin-left: 30px;
      margin-top: 5%;
      margin-bottom: 5%;
      width: 80%;
    }
  }
`;

export const SendContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .home-div {
    cursor: pointer;

    p {
      text-align: center;
      font-size: 20px;
    }

    .home-img {
      width: 22vw;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    .home-div {
      margin-bottom: 3%;

      p {
        font-size: 18px;
      }
    }

    .home-div .home-img {
      width: 190px;
      height: 100px;
    }
  }
`;
