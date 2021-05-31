import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TopicContent = styled.div`
  #topic {
    width: 380px;
    height: 48px;
    font-size: 19px;
    font-weight: bold;
    text-transform: capitalize;
    color: black;
    border: none;
    border-bottom: 3px solid lightgray;
    transition: all 0.3s;
    margin-top: 3%;

    :hover {
      border-bottom: 3px solid #007bff;
    }
  }
`;

export const TextContent = styled(motion.div)`
  #text {
    width: 850px;
    min-height: 130px;
    display: inline-block;

    outline: none;
    resize: none;
    text-align: justify;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    margin-top: 3%;

    border-bottom: 4px solid #007bff;
    padding: 10px;
  }
`;

export const ImageContent = styled(motion.div)`
  margin-top: 3%;
`;
