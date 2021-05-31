import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 7.5fr;
  grid-template-rows: 9vh 91vh;
  grid-template-areas:
    'navbar navbar'
    'sidebar main';

  main {
    grid-area: main;
    background-color: #e0e0e0;
  }

  #list {
    border-radius: 8px;
    margin: 0px 50px 0px 40px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 15vw 85vw;
    grid-template-rows: 10vh 90vh;

    main {
      width: 100%;
      height: 100%;
    }

    #list {
      width: 95%;
      height: 85%;
      margin: 0;
      margin-left: 2%;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 1.2%;

  #search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    color: white;
    background-color: #007bff;
    margin-left: 1%;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-size: 21px;

    :hover {
      background-color: #006de3;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    #search {
      width: 40px;
      height: 30px;
    }
  }
`;
