import styled from 'styled-components';

export const ImagePreview = styled.div`
  input[type='file'] {
    display: none;
  }

  #preview {
    width: 350px;
    height: 200px;
    border: 4px dashed #b5b5b5;
    transition: all 0.3s;
    position: relative;

    :hover {
      border: 4px dashed #007bff;

      #upload-icon {
        color: #007bff;
      }
      p {
        color: #007bff;
      }
    }

    #upload-icon {
      font-size: 35px;
      margin-bottom: 2%;
      color: #5c5c5c;
    }

    #label-upload {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      font-size: 21px;
      height: 100%;
      width: 100%;
      color: #5c5c5c;
      cursor: pointer;
    }

    #img-preview {
      width: 353px;
      height: 203px;
    }
  }
`;
