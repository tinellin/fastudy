import styled from 'styled-components';

export const Title = styled.h1`
  color: #007bff;
  padding-top: 0.3%;
  padding-left: 3%;
`;

export const LessonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.4fr;
  justify-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 45vw 45vw 45vw;
    height: 62vh;
  }
`;

export const LessonCard = styled.div`
  box-shadow: 0px 0px 6px 1px rgba(143, 143, 143, 0.6);

  width: 230px;
  height: 230px;
  border-radius: 5px;
  margin-top: 6%;

  display: flex;
  flex-direction: column;
  align-items: center;

  #difficulty-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 3px 5px 0px rgba(191, 191, 191, 1);
    h2 {
      color: white;
    }
  }

  .card-content {
    width: 100%;
    text-align: center;
    margin-top: 5%;

    h3 {
      display: inline;
      margin-left: 2%;
    }

    .card-icon {
      margin-bottom: 4%;
    }
  }

  button {
    width: 100%;
    height: 70px;
    background-color: white;
    margin-top: 8%;
    padding: 5px;
    border: none;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px -1px 3px 0px rgba(191, 191, 191, 1);
    cursor: pointer;

    :hover {
      letter-spacing: 1px;
      background-color: #007bff;
      color: white;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 200px;
    height: 160px;
    margin-top: 1%;

    .card-content h3 {
      font-size: 16px;
    }

    #difficulty-bar {
      height: 100px;
    }

    button {
      margin-top: 1%;
      width: 100%;
      height: 40px;
    }
  }
`;
