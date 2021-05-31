import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FieldContainer = styled(motion.div)`
  position: relative;

  input:focus {
    border: 2px solid rgba(0, 123, 255, 0.8);
  }

  .icon {
    position: absolute;
    top: ${(props) => `${props.top}%`};
    left: 4%;
    color: #919191;
  }

  input {
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    margin-top: ${(props) => `${props.marginTop}%`};
    color: #404040;
    background-color: #e6e6e6;
    font-size: 18px;
    border: none;
    padding-left: 12%;
    border-radius: 3px;
    font-weight: 500;
    transition: all 0.1s;
  }
`;
