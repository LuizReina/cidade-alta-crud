import styled from 'styled-components';

import background from './imgs/wallpaper.jpg';

export const Body = styled.body`
  
`;

export const Main = styled.main`
  align-items: center;
  background-image: url(${background});
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
    font-size: 20px;
    margin: 1vh 1vw;
  }

  button {
    margin: 1vh 1vw;
  }

  input {
    margin: 0vh 1vw;
  }
`;
