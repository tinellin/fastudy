import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, #007bff, #3a7bd5);

  #toggle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    font-size: 40px;
    color: white;
    cursor: pointer;
  }

  nav {
    width: 100%;
    h1 {
      text-align: center;
      font-size: 21px;
      color: #f5f5f5;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

  p {
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 47px;
    margin-bottom: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    position: absolute;
    z-index: 1;
    top: 10%;
    width: ${(props) => `${props.width}%`};
    height: 90%;

    nav h1 {
      font-size: 20px;
    }
  }
`;

export const NavItens = styled.ul`
  width: 100%;
  list-style: none;
  font-size: 20px;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  transition: 0.5s all;

  color: white;
  padding: 4%;
  margin-top: 6.5%;
  cursor: pointer;

  :hover {
    border-left: 7px solid #e0e0e0;
  }

  .icon {
    font-size: 30px;
    margin-left: 20px;
  }

  span {
    margin-left: 18px;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    span {
      font-size: 16px;
    }

    #icon {
      margin-top: ${(props) => `${props.marginTop}%`};
      margin-left: ${(props) => `${props.marginLeft}%`};
    }
  }
`;
