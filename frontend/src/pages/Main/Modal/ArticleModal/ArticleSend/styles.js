import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #545454;
  }

  #subject {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 3%;

    h2 {
      color: #545454;
      font-size: 23px;
    }
  }

  h2 {
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 1%;
    color: #545454;
  }

  #components {
    display: flex;
    flex-direction: row;
    margin-top: 2%;
    border: 5px dotted #b5b5b5;
  }

  #area {
    width: 95%;
    max-width: 100%;
    max-height: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    padding: 40px;
    border: 3px dashed lightgray;

    #remove {
      align-self: flex-end;
    }
  }
`;

export const DragContent = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 55px;
  margin: 20px;
  font-size: 16px;
  border: 1px solid #007bff;
  color: white;
  background-color: #007bff;
  border-radius: 3px;
  cursor: grab;

  .icon {
    margin-right: 5%;
    font-size: 24px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 3px dashed lightgray;
      background: transparent;
      cursor: grabbing;
    `}
`;
