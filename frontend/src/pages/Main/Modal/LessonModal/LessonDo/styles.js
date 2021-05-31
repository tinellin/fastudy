import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 5%;

  h3 {
    align-self: baseline;
    margin-left: 5%;
    margin-top: 2.5%;
  }

  p {
    align-self: baseline;
    margin-left: 5%;
    margin-top: 1%;
    text-align: justify;
  }

  img {
    align-self: baseline;
    margin-left: 4.5%;
    margin-top: 0.5%;
  }

  #answers {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.5%;
    margin-left: 7%;
    font-size: 15px;

    .question {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 1%;
      position: relative;

      #help-div {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        padding: 4px;
        width: 100%;
      }

      h5 {
        display: inline;
        color: #6b6a6a;
        font-size: 16px;
        margin-right: 0.6%;
      }

      .radio-container {
        position: relative;
        cursor: pointer;
        padding-left: 23px;
        text-align: justify;

        input {
          display: none;
        }

        .checkmark {
          position: absolute;
          left: 0;
          top: 0;
          height: 20px;
          width: 20px;
          background-color: #d9d9d9;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        input:checked + .checkmark {
          transform: scale(1.1);
          background-color: #007bff;
        }

        :hover .checkmark {
          background-color: #bfbfbf;
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    p {
      font-size: 14px;
    }

    #answers .question h5 {
      margin-right: 1%;
    }
  }
`;

export const TemplateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
  font-size: 20px;
  width: 500px;

  table {
    width: 70%;
    border-collapse: separate;
    border-spacing: 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 0px 5px 1.8px rgba(204, 204, 204, 1);

    tr:first-child th:first-child {
      border-top-left-radius: 9px;
    }

    tr:first-child th:last-child {
      border-top-right-radius: 9px;
    }

    th {
      border: none;
      background-color: #007bff;
      color: white;
      padding: 8px;
    }

    #first-color {
      background-color: white;
    }

    #second-color {
      background-color: #dedede;
    }

    td {
      padding: 5px;
    }
  }
`;
