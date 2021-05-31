import styled from 'styled-components';

export const ChoiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  .nav-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 86px;
    height: 50px;
    margin-top: 36px;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    font-size: 45px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    position: relative;

    :hover {
      color: white;
      background-color: #007bff;
    }

    .icon {
      position: absolute;
      top: 8%;
    }

    h3 {
      opacity: 0%;
    }

    :hover .triangle {
      animation: showTooltip 0.3s;
      transform: translateY(0px);
      border-left: solid transparent 10px;
      border-right: solid transparent 10px;
      border-top: solid #007bff 10px;
      top: -30%;
      content: ' ';
      height: 0;
      left: 53%;
      margin-left: -13px;
      position: absolute;
      width: 0;
      opacity: 1;
    }

    :hover .tooltip {
      animation: showTooltip 0.3s;
      transform: translateY(0px);
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 150px;
      height: 50px;
      border-radius: 5px;
      background-color: #007bff;
      position: absolute;
      top: -128%;

      h3 {
        opacity: 1;
      }
    }

    @keyframes showTooltip {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  /* Botão de Pesquisar*/
  #btn-search {
    width: 65px;
    height: 53px;
    margin-top: 33px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border: none;
    background-color: white;
    font-size: 19px;
    cursor: pointer;
    transition: 0.4s;

    #search-icon {
      text-align: center;
    }

    :hover {
      color: white;
      background-color: #007bff;
    }
  }

  #input-search {
    font-size: 20px;
    border: none;
    height: 0;
    width: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-right: 1px solid gainsboro;
    padding-left: 10px;
    padding-bottom: -5px;
  }

  @keyframes openSearch {
    from {
      width: 0;
    }

    to {
      width: 330px;
    }
  }

  @keyframes closeSearchW {
    from {
      width: 330px;
    }
    to {
      width: 0;
    }
  }

  @keyframes closeSearchH {
    from {
      height: 53px;
    }

    to {
      height: 0;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .nav-icons {
      width: 65px;
      height: 40px;
    }

    .nav-icons .icon {
      font-size: 35px;
    }

    .nav-icons:hover .tooltip {
      font-size: 13px;
      width: 80px;
      height: 40px;
      top: -119%;
    }
  }
`;
