import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SButton = styled(motion.button)`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin-top: ${(props) => `${props.marginTop}%`};
  padding: 5px;
  border: 3px solid #007bff;
  border-radius: 3px;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    letter-spacing: 1px;
    background-color: #007bff;
    color: white;
  }

  .div-button:hover button {
    color: white;
  }
`;

export const FinalMessage = styled.span`
  margin-top: 5%;
  font-size: 24px;

  .link-entrar {
    text-decoration: none;
    font-weight: 300;
    color: gray;
  }

  .link-entrar:hover {
    color: #007bff;
  }
`;
