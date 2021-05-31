import styled from 'styled-components';

export const Content = styled.span`
  width: 100%;
  #content {
    text-align: justify;
    border: none;
    outline: none;
    resize: none;
    text-align: justify;
    font-size: 15px;
    width: 100%;
    margin-bottom: ${(props) => `${props.marginBottom}%`};
    padding: ${(props) => `${props.padding}px`};
    border-radius: ${(props) => `${props.borderRadius}px`};
    margin-top: ${(props) => `${props.marginTop}%`};
    min-height: ${(props) => `${props.height}px`};
  }
`;
