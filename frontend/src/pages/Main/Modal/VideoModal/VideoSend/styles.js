import styled from 'styled-components';
import { ImagePreview } from '../../../../../templates/Preview/styles';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 6%;

  h1 {
    font-size: 24px;
    align-self: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 2%;
  }

  h2 {
    color: #545454;
    font-size: 24px;
    margin-bottom: 2%;
  }

  #support-material {
    width: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
    }

    hr {
      margin-top: 0.8%;
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    #supportMaterial-container {
      margin-top: 2%;
      display: flex;
      flex-direction: column;
    }

    #content:nth-child(1) {
      padding-top: 0%;
    }

    #content {
      padding-top: 2%;
    }
  }

  #video-upload {
    width: 100%;
    margin-top: 5%;
    border-radius: 15px;
    background-color: #f0f0f0;
    cursor: pointer;

    input[type='file'] {
      display: none;
    }

    #upload-preview {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 70px;

      #upload-label {
        font-size: 20px;
        cursor: pointer;
      }
    }
  }

  #send-container {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      align-self: baseline;
    }

    #support-material h3 {
      font-size: 13px;
    }

    ${ImagePreview} #preview {
      width: 330px;
      height: 200px;
    }

    #video-upload #upload-preview #upload-label {
      font-size: 16px;
    }
  }
`;

export const File = styled.div`
  input[type='file'] {
    display: none;
  }

  #type {
    display: none;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: #007bff;
    margin-right: 2.5%;
    position: relative;

    p {
      font-size: 13px;
      color: white;
      text-transform: uppercase;
      font-weight: bolder;
      letter-spacing: 2px;
    }
  }
  #type::after {
    content: ' ';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 0 20px 20px;
    border-color: transparent transparent transparent #007bff;
    top: 9.5%;
    left: 81%;
    position: absolute;
    z-index: -1;
  }

  #upload-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #upload {
    width: 100%;
    height: 60px;
    padding: 8px;
    background-color: #f0f0f0;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #name {
      width: 100%;
      font-size: 16px;
      margin-top: 1%;
      padding: 8px;
      border: none;
    }

    #label-file {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      #icon {
        font-size: 20px;
        margin-right: 1%;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;

export const ConfirmationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 125px;
    height: 53px;
    border: none;
    margin: 16px;
    background-color: transparent;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    font-size: 20px;
    :hover {
      color: white;
    }
  }

  #yes {
    border: 2px solid #5cb85c;
    :hover {
      background-color: #5cb85c;
    }
  }

  #no {
    border: 2px solid #d9534f;
    :hover {
      background-color: #d9534f;
    }
  }
`;

export const SentContent = styled.div`
  width: 380px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: #5cb85c;
  }
`;
