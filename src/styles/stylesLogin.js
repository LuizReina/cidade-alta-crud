import styled from 'styled-components';
import backgroundLogin from '../imgs/wallpaper.jpg';

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

export const Img = styled.img`
  position: absolute;
`;
