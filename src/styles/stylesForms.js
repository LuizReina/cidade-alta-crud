import styled from 'styled-components';

export const CodeFormsBody = styled.main`
  align-items: center;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  height: 98vh;
  text-align: center;
  width: 99vw;

  label {
    font-size: 30px;
  }

  section {
    flex-direction: row;
    margin: 3vh 3vh 0px;
  }

  input, textarea {
    font-size: 18px;
    height: 2vh;
    margin: 4px 0;
    padding: 0.8vh;
    width: 20vw;
  }

  input {
    text-align: center;
  }

  textarea {
    height: 20vh;
  }

  select {
    font-size: 18px;
    padding: 0.2vh 0.5vh;
    width: 120px;
  }

  a, button {
    background-color: lightgray;
    border: solid 1px black;
    border-radius: 5px;
    color: black;
    font-size: 25px;
    margin: 10px 10px 5px;
    padding: 5px 10px;
    text-decoration: none;
    transition: 0.8s all ease-out;
    &:hover {
      color: white;
      background-color: green;
      border: 1px solid black;
    }
  }

  a {
    padding: 6px 34.545px;
    &:hover {
      color: white;
      background-color: red;
      border: 1px solid black;
    }
  }

  span {
    color: green;
    font-size: 2vh;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;

    input, textarea {
      width: 80%;
    }
  }

  @media screen and (max-width: 650px) {
    label {
      font-size: 20px;
    }
  }
`;

export const debug = styled.body``;
