import styled from 'styled-components';
import backgroundLogin from './imgs/wallpaper.jpg';
import backgroundHome from './imgs/wallpaperPolice.jpg';

export const LoginStyle = styled.body`
  align-items: center;
  background-image: url(${backgroundLogin});
  display: flex;
  height: 98vh;
  justify-content: center;

  section {
    align-items: center;
    background-color: #FFF;
    border: solid 2px lightblue;
    box-shadow: 5px 5px 10px black;
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    margin-bottom: 10vh;
    opacity: 0.95;
    width: 20vw;
  }

  img {
    height: 150px;
    margin-bottom: 2vh;
    width: 150px;
  }

  label {
    align-items: center;
    color: #000;
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin: 1vh 1vw;
  }

  input {
    font-size: 15px;
    padding: 1vh 1vw;
  }

  button {
  background: transparent;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  transition: 0.8s all ease-out;
    &:hover {
      color: black;
      background-color:lightblue;
      border: 1px solid black;
    }
  }

  input {
    margin: 0vh 1vw;
  }
`;

export const HomeStyle = styled.main`
  align-items: center;
  background-image: url(${backgroundHome});
  display: flex;
  flex-direction: column;
  height: 98vh;
  width: 99vw;

  header {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h1 {
    text-shadow: 1px 1px 4px lightgray;
    font-size: 4.5vh;
  }

  label {
    align-items: center;
    color: lightgray;
    font-size: 2vh;
    margin: 3vh 0.5vw;
  }

  input {
    font-size: 1.5vh;
    margin: 0vh 0.3vw 1vh;
    padding: 0.1vh 0.5vw;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: lightgray;
    font-size: 3vh;
  }

  table {
    border: solid 2px gray;
    width: 42vw;
  }

  th {
    font-size: 2vh;
  }

  th, td {
    border: solid 2px gray;
    color: white;
    text-align: center;
    width: 6vw;
  }
  
  td {
    align-items: top;
    font-size: 1.6vh;
  }

  a {
    color: black;
    font-size: 2vh;
    font-weight: 700;
    margin: auto;
    text-decoration: none;
  }
`;

export const BtnExcluir = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 2vh;
  font-weight: 900;
`;

export const BtnFiltrar = styled.button`
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2vh;
  margin: 1.5vh 1vw 3vh;
  padding: 0.3vh 0.5vw;
  width: 7vw;
  transition: 0.8s all ease-out;
    &:hover {
      color: black;
      background-color: gray;
      border: 1px solid black;
      border-radius: 5px;
    }
`;

export const AddCodeBtnStyle = styled.section`
  a {
    align-items: center;
    background-color: lightgrey;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    margin: 1vh 1vw;
    height: 5vh;
    justify-content: center;
    padding: 0.3vh 1vw;
    width: 15vw;
    transition: 0.8s all ease-out;
    &:hover {
      color: white;
      background-color: green;
      border: 1px solid black;
      border-radius: 5px;
    }
  }
`;

export const PaginationBtns = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border: solid 1px red;
    border-radius: 100%;
    color: black;
    cursor: pointer;
    font-weight: 700;
    margin: 1vh 0.3vw;
    transition: 0.5s all ease-out;
    &:hover {
      color: white;
      background-color: ${(props) => (props.primary ? 'black' : 'red')};
      border: ${(props) => (props.primary ? '1px solid lightblue' : '1px solid black')};
    }
  }
`;

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
    margin: 3vh;
  }

  input, textarea {
    font-size: 18px;
    height: 2vh;
    margin: 8px 0;
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
    width: 50px;
  }

  a, button {
    background-color: lightgray;
    border: solid 1px black;
    border-radius: 5px;
    color: black;
    font-size: 25px;
    margin: 10px;
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
    color: red;
    font-size: 2vh;
    font-weight: 700;
  }
`;

export const CodeDetailsBody = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 98vh;
  width: 99vw;

  main {
    width: 40%;
  }

  section {
    text-align: center;
  }

  h2 {
    font-size: 25px;
    margin: 5px;
  }

  p {
    color: rebeccapurple;
    font-size: 23px;
    font-weight: 700;
  }

  a {
    background-color: lightgray;
    border: solid 1px black;
    border-radius: 5px;
    color: black;
    font-size: 25px;
    padding: 5px 10px;
    text-decoration: none;
    transition: 0.8s all ease-out;
    &:hover {
      color: white;
      background-color: red;
      border: 1px solid black;
    }
  }
`;

export const Img = styled.img`
  position: absolute;
`;
