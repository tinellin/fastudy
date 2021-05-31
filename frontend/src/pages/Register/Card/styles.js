import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 340px;
  height: 90px;
  margin-top: 5%;
  margin-bottom: 13%;
  background-color: white;

  p {
    font-size: 17px;
    margin-left: 5px;
    margin-top: 3px;
  }

  .icon-container {
    margin-top: 6px;
    display: flex;
    flex-direction: row;
  }

  .done {
    color: #5cb85c;
  }

  .cancel {
    color: #d9534f;
  }
`;
