import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 55px;

  h1 {
    text-align: center;
    width: 100%;
  }

  h2 {
    font-size: 20px;
    text-align: center;
    width: 100%;
    color: #007bff;
    margin: 20px 0 10px 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px;

    h1 {
      font-size: 18px;
      width: 100%;
    }

    h2 {
      font-size: 15px;
      margin: 0;
      border-top: 5%;
    }
  }
`;

export const Topic = styled(motion.h3)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 21px;
  margin-bottom: 1.2%;
  margin-top: 1.2%;
  width: 100%;

  #icon {
    color: #007bff;
    margin-right: 0.5%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
`;

export const Text = styled(motion.div)`
  font-size: 16px;
  text-align: justify;
  p {
    margin-top: 1.8%;
    margin-bottom: 1.8%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Image = styled(motion.img)`
  margin-top: 2%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 340px;
    height: 200px;
  }
`;
