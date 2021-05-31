import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 22%;
  height: 50px;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

export const SquareContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  color: white;
  background-color: #007bff;
  margin: 5px;
  font-size: 28px;
  transition: 0.3s all;
  cursor: pointer;

  :hover {
    background-color: #006de3;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 200px;
    height: 40px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
