import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.4fr;
  justify-items: center;
  padding-top: 40px;
  padding-left: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: 46vw 46vw 46vw;
    padding-top: 10px;
    padding-left: 0px;
    height: 65vh;
  }
`;

export const ArticleCard = styled(motion.div)`
  box-shadow: 0px 0px 6px 1px rgba(143, 143, 143, 0.6);
  width: 260px;
  height: 230px;
  border-radius: 10px;
  transition: 0.3s all;
  cursor: pointer;
  margin-top: 6%;

  #time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #007bff;
    height: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 0px;
    width: 100%;
    font-size: 12px;
  }

  #data-container {
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .data {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 80%;
      margin-top: 12px;
      font-size: 12px;
    }
  }

  .icon {
    font-size: 21px;
    margin-right: 2%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 235px;
    height: 160px;
    margin-top: 1%;

    #time {
      font-size: 10px;
    }

    .icon {
      font-size: 15px;
    }
  }
`;
