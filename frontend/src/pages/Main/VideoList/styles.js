import styled from 'styled-components';

export const VideoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 0.4fr;
  justify-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 46vw 46vw 46vw;
    height: 65vh;

    #null {
      border: 1px solid red;
      font-size: 15px;
    }
  }
`;

export const PreviewContainer = styled.div`
  margin-top: 0.5%;
  margin-left: 6%;
  cursor: pointer;

  img {
    width: 350px;
    height: 200px;
  }

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .information-container {
    width: 85%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 2%;
    margin-left: 0;

    .information-container {
      width: 100%;
    }

    img {
      width: 260px;
      height: 120px;
    }
  }
`;
