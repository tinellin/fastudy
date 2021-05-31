import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: navbar;

  background-color: white;
  border-bottom: 1px solid #e0e0e0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin-left: 1%;

    #logo-img {
      margin-top: 40px;
      margin-left: -10px;
      width: 210px;
      height: 210px;
      cursor: pointer;
    }

    h1 {
      display: inline;
      font-size: 35px;
      padding: 45px;
    }
  }

  .user {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 5%;
    position: relative;
    cursor: pointer;

    #user-picture {
      width: 60px;
      height: 60px;
      border-radius: 100px;
      margin-left: 15%;
      border: 4px solid #007bff;
    }

    h5 {
      font-size: 25px;
      color: black;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 99%;

    .logo {
      #logo-img {
        margin-top: 40px;
        margin-left: -50px;
        width: 190px;
        height: 190px;
      }
    }

    .logo {
      margin-left: 0%;
      h1 {
        font-size: 20px;
      }
    }

    .user {
      margin-right: 5%;
      position: unset;

      #user-picture {
        width: 55px;
        height: 55px;
      }
    }
  }
`;
