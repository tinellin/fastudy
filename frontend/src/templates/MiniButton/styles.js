import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  #align {
    margin-left: ${(props) => `${props.marginLeft}%`};
  }

  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
  }

  #btn-add {
    background-color: #007bff;
    color: white;
    font-size: 20px;
    margin-left: 1%;
    margin-right: ${(props) => `${props.marginRight}px`};

    :hover {
      background-color: blue;
    }
  }

  #btn-remove {
    background-color: #ff0000;
    color: white;
    font-size: 17px;

    :hover {
      background-color: red;
    }
  }
`;
