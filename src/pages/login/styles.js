import styled from "styled-components";
import Fundo from "../../assets/Imagens/fundo.jpg";
import Logo from "../../assets/Imagens/logo.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* height: 100vh; */
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImgBackground = styled.img`
  background-repeat: no-repeat;
  height: 100vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80vw;
`;

export const LogoContainer = styled.img`
  background-repeat: no-repeat;
  padding: 5em;
`;

export const Input = styled.input`
  width: 30%;
  margin: 10px;
  border: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #c4c4c4;
  padding: 0px 0px 10px 20px;
  margin: 30px;

  ::placeholder {
    color: #c4c4c4;
    opacity: 1;
  }

  :active {
    border-bottom-color: #05a484;
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30%;

  margin-Bottom: 90px;
  a {
    color: #157763;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #157763;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #5ba092;
  padding: 20px;
  width: 30%;
  border-radius: 10px;

  a {
    color: white;
    font-weight: bold;
  }

  :active {
    background-color: #05a484;
  }
`;
