import styled from 'styled-components';
import { ImagePreview } from '../../../../../templates/Preview/styles';

export const Menu = styled.div`
  margin-top: 2%;

  .content-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    align-self: baseline;
    color: #545454;
    font-size: 19px;
    margin-top: 3%;
    margin-bottom: 3%;
  }

  select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 40px;
    font-size: 19px;
    border-radius: 5px;
    border: none;
    background-color: #e6e6e6;
  }
`;

export const Content = styled.div`
  width: 100%;

  #title {
    width: 38%;
  }

  p {
    font-size: 20px;
    margin-bottom: 2%;
  }

  #p-answers {
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  #send-exercise {
    input[type='submit'] {
      align-self: center;
      width: 230px;
      height: 60px;
      border: none;
      background-color: #007bff;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    ${ImagePreview} #preview {
      width: 320px;
      height: 200px;
    }
  }
`;

export const AnswerContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 15px;

  .question {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;

    h5 {
      display: inline;
      color: #6b6a6a;
      font-size: 16px;
      margin-right: 0.7%;
    }

    .radio-container {
      position: relative;
      cursor: pointer;
      padding-left: 26px;

      input[type='radio'] {
        display: none;
      }

      .checkmark {
        display: flex;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        height: 20px;
        width: 20px;
        background-color: #d9d9d9;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      input[type='radio']:checked + .checkmark {
        transform: scale(1.1);
        background-color: #5cb85c;
        opacity: 100%;
      }

      input[type='radio']:checked + .checkmark:after {
        content: '✓';
        font-size: 18px;
        color: white;
        position: absolute;
        top: 0;
        left: 3px;
      }

      :hover .checkmark {
        background-color: #bfbfbf;
      }
    }

    @media (min-width: 320px) and (max-width: 480px) {
      h5 {
        margin-right: 7px;
      }
    }
  }
`;
