import styled from 'styled-components';

export const ContainerError = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  margin-top: 20px;
  border-radius: 5px;
  background: #ffe6e6;
  padding: 0 15px;

  #error {
    color: #ff0000;
    font-size: 16px;
    margin-top: 1px;
    margin-left: 4px;
  }
`;
