import styled from 'styled-components';

export const CodeDetailsBody = styled.main`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  height: 98vh;

  header {
    height: 8vh;
    text-align: center;
    width: 100%;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 70vh;
    text-align: center;
    width: 100%;
  }

  footer {
    display: flex;
    justify-content: center;
    height: 22vh;
    width: 100%;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    text-align: center;
  }

  h2, p {
    margin: 0px;
    padding: 10px 0px;
    width: 80%;
  }

  h2 {
    color: black;
    font-size: 25px;
  }

  p {
    color: rebeccapurple;
    font-size: 20px;
    font-weight: 700;
  }

  a {
    background-color: lightgray;
    border: solid 1px black;
    border-radius: 5px;
    color: black;
    font-size: 25px;
    height: 3vh;
    padding: 5px 10px;
    text-decoration: none;
    transition: 0.8s all ease-out;
    &:hover {
      color: white;
      background-color: red;
      border: 1px solid black;
    }
  }

  @media screen and (max-width: 1024px) {
    header {
      font-size: 20px;
    }

    main {
      height: 80vh;
    }

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 25px;
    }

    footer {
      height: 10vh;
    }    
  }

  @media screen and (max-width: 650px) {
    header {
      font-size: 15px;
    }

    main {
      height: 80vh;
    }

    h2, p {
      padding: 5px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }

    footer {
      height: 10vh;
    }    
  }
`;

export const debug = styled.body``;
