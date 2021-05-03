import styled from 'styled-components';
import backgroundLogin from './imgs/wallpaper.jpg';
import backgroundHome from './imgs/wallpaperPolice.jpg';

export const LoginStyle = styled.main`
  align-items: center;
  background-image: url(${backgroundLogin});
  display: flex;
  height: 98vh;
  justify-content: center;

  main {
    align-items: center;
    background-color: #FFF;
    border: solid 2px lightblue;
    box-shadow: 5px 5px 10px black;
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: center;
    opacity: 0.95;
    width: 20%;
  }

  img {
    height: 15vh;
    margin-bottom: 2vh;
    width: 8vw;
  }

  section {
    margin: 1vh 3vw 2vh;;
  }

  label {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 23px;
    margin: 2vh 1vw;
  }

  input {
    border: solid 1px black;
    font-size: 15px;
    height: 1.5vh;
    padding: 1vh 1vw;
    width: 13vw;
  }  

  button {
  background: transparent;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  height: 5vh;
  margin: 1vh 1vw;
  padding: 1vh 1vw;
  transition: 0.8s all ease-out;
  width: 8vw;
    &:hover {
      color: black;
      background-color:lightblue;
      border: 1px solid black;
    }
  }

  input {
    margin: 0vh 1vw;
  }

  @media screen and (max-width: 1024px) {

    main {
      height: 60vh;
      width: 60vw;
    }

    img {
      height: 25%;
      width: 35%;
    }

    section {
      width: 100%;
    }

    label {
      font-size: 30px;
    }

    input {
      font-size: 20px;
      width: 50%;
    }

    button {
      font-size: 18px;
      width: 30%;
    }
}

  @media screen and (max-width: 650px) {

    main {
      height: 70vh;
      width: 75vw;
    }

    img {
      height: 25%;
      width: 40%;
    }

    label {
      font-size: 20px;
    }

    input {
      font-size: 15px;
      width: 70%;
    }

    button {
      font-size: 14px;
      width: 40%;
    }
  }
`;

export const HomeStyle = styled.main`
  align-items: center;
  background-image: url(${backgroundHome});
  display: flex;
  flex-direction: column;
  height: 98vh;

  header {
    align-items: center;
    justify-content: center;
    height: 25vh;
    text-align: center;
    width: 100%;
  }

  h1 {
    text-shadow: 1px 1px 4px lightgray;
    font-size: 4.5vh;
  }

  label {
    align-items: center;
    color: lightgray;
    font-size: 18px;
    margin: 5px;
  }

  input {
    font-size: 13px;
    margin: 0vh 0.3vw 1vh;
    padding: 0.1vh 0.5vw;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: top;
    margin-top: 1%;
    height: 55vh;
    width: 30%;
  }

  img {
    height: 20px;
    width: 20px;
  }

  table {
    border: solid 2px gray;
    height: 90%;
    width: 100%;
  }

  th {
    font-size: 17px;
  }

  th, td {
    background-color: white;
    border: solid 2px gray;
    text-align: center;
    width: 40%;
  }
  
  td {
    align-items: top;
    font-size: 15px;
  }

  footer {
    align-items: top;
    display: flex;
    justify-content: center;
    height: 20vh;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    section {
      width: 90%;
    }
  }

  @media screen and (max-width: 650px) {
    label {
      font-size: 12px;
    }

    input {
      height: 1.5vh;
    }

    select {
      height: 2.8vh;
    }

    section {
      /* background-color: yellow; */
      margin-top: 5%;
      height: 60vh;
      width: 90%;
    }

    th {
    font-size: 10px;
    }

    th, td {
      background-color: white;
      border: solid 2px gray;
      text-align: center;
      width: 40%;
    }
    
    td {
      align-items: top;
      font-size: 8px;
    }
  }
`;

export const Td = styled.td`
  color: ${(props) => (props.id === 1
    ? 'green' : 'red')};
  font-weight: 700;
`;

export const ActiveFilters = styled.p`
  background-color: lightgray;
  color: black;
  font-size: 18px;
  font-weight: 700;
  margin: 2% auto;
  padding: 0.5vh;
  width: 30%;

  @media screen and (max-width: 1024px) {
      width: 80%;
  }

  @media screen and (max-width: 650px) {
    font-size: 10px;
    margin: 2% auto;
    width: 80%;
  }
`;

export const AddCodeBtnStyle = styled.div`
  a {
    align-items: center;
    background-color: lightgrey;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    height: 5vh;
    justify-content: center;
    padding: 0.3vh 1vw;
    width: 15vw;
    text-decoration: none;
    transition: 0.8s all ease-out;
    &:hover {
      color: white;
      background-color: green;
      border: 1px solid black;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 1024px) {
    a {
      width: 40vw;
    }
  }

  @media screen and (max-width: 650px) {
    a {
      font-size: 10px;
      height: 5vh;
      width: 35vw;
    }
  }
`;

export const BtnExcluir = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const PaginationBtns = styled.button`
  background-color: ${(props) => (props.actualPage === props.children
    ? 'red' : 'transparent')};;
  border: none;
  border-radius: 100%;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  height: 23px;
  margin: 1vh 0.3vw;
  transition: 0.3s all ease-out;
  width: 23px;
  &:hover {
    color: white;
    background-color: red;
    border: 1px solid black;
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
`;

export const CodeDetailsBody = styled.main`
  align-items: center;
  background-color: lightgray;
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
