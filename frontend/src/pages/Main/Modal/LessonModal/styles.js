import styled from 'styled-components';

export const LessonModalContainer = styled.div`
  #top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  h1 {
    justify-self: center;
    padding: 10px 15px 10px 15px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
  }

  .arrow-icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5%;
    color: white;
    font-size: 45px;
    transition: all 0.5 ease-in-out;
    cursor: pointer;

    .icon {
      background-color: #007bff;
    }

    #arrow-left {
      border-top-right-radius: 12px;
      border-bottom-left-radius: 12px;

      :hover {
        background-color: blue;
      }
    }

    #arrow-right {
      border-top-left-radius: 12px;

      :hover {
        background-color: blue;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    h1 {
      padding: 7px 12px 7px 12px;
    }
  }
`;

export const LessonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
