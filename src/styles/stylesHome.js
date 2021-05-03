import styled from 'styled-components';
import backgroundHome from '../imgs/wallpaperPolice.jpg';

export const HomeStyle = styled.main`
  align-items: center;
  background-image: url(${backgroundHome});
  display: flex;
  flex-direction: column;
  height: 98vh;

  header {
    align-items: center;
    height: 28vh;
    justify-content: center;
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
    margin: 0 5px;
  }

  input {
    font-size: 13px;
    margin: 0vh 0.3vw 1vh;
    padding: 0.1vh 0.5vw;
  }

  select {
    margin: 5px 0;
  }

  span {
    margin: 0px;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 55vh;
    width: 100%;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: top;
    width: 60%;
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
    width: 30%;
  }
  
  td {
    align-items: top;
    font-size: 17px;
  }

  footer {
    align-items: top;
    display: flex;
    justify-content: center;
    height: 15vh;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    section {
      width: 90%;
    }
  }

  @media screen and (max-width: 650px) {
    img {
      height: 15px;
      width: 15px;
    }

    main {
      height: 60vh;
    }

    footer {
      height: 10vh;
    }
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
      margin-top: 5%;
      height: 60vh;
      width: 90%;
    }

    table {
      height: 85%;
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
      font-size: 9px;
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
      width: 40vw;
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

export const NoCodeMsg = styled.h3`
  color: white;
  font-size: 20px;
  padding: 10px;
  text-shadow: black;

  @media screen and (max-width: 1024px) {
    
  }

  @media screen and (max-width: 650px) {
    text-align: center;
    font-size: 20px;
  }
`;
