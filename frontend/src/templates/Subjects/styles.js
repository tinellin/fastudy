import styled from 'styled-components';

export const Content = styled.div`
  select {
    width: ${(props) => `${props.width}px`};
    margin-top: ${(props) => `${props.marginTop}%`};
    height: 40px;
    font-size: 19px;
    border-radius: 3px;
    border: none;
    margin-bottom: 2%;
    background-color: #e6e6e6;
  }
`;
