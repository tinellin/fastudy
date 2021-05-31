import styled from 'styled-components';

export const Opacity = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100%;
  background-color: gray;
  opacity: 20%;
`;

export const ModalContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 8%;
  left: 0;
  right: 0;
  z-index: 2;

  background-color: white;
  text-align: center;
  border-radius: 12px;
  animation: showModal 0.5s;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  max-width: ${(props) => `${props.maxW}%`};
  max-height: ${(props) => `${props.maxH}%`};
  min-width: ${(props) => `${props.minW}%`};
  min-height: ${(props) => `${props.minH}%`};

  @keyframes showModal {
    from {
      top: -2000px;
    }
    to {
      top: 12%;
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: lightgray;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: blue;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #006de3;
  }

  #close {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    top: 0.2%;
    max-width: 95%;
    max-height: 100%;
  }
`;

export const Close = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  background-color: #007bff;
  font-size: 50px;
  border-bottom-left-radius: 12px;
  cursor: pointer;

  :hover {
    background-color: #006de3;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 40px;
  }
`;
