import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;

  @keyframes showUserMenu {
    from {
      transform: translateY(15px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  #triangle {
    animation: showUserMenu 0.3s;
    transform: translateY(0px);
    border-left: solid transparent 10px;
    border-right: solid transparent 10px;
    border-bottom: solid #007bff 10px;
    top: 120%;
    content: ' ';
    height: 0px;
    right: 5%;
    margin-left: -13px;
    position: absolute;
    width: 0px;
    opacity: 1;
  }

  #user-menu {
    animation: showUserMenu 0.3s;
    transform: translateY(0px);
    width: 200px;
    background-color: #007bff;
    border-radius: 5px;
    color: white;

    position: absolute;
    top: 135%;
    left: 0%;

    .user-options {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      color: white;
      text-decoration: none;

      :hover {
        border-radius: 5px;
        background-color: #006ce0;
      }

      p {
        padding: 14px;
      }

      .icon {
        display: flex;
        justify-content: center;
        width: 50px;
        margin-right: 4%;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    z-index: 2;

    #triangle {
      display: none;
    }

    #user-menu {
      width: 200px;
      position: absolute;
      top: 9%;
      left: 28%;
    }
  }
`;
