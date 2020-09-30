import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  ImgBackground,
  Section,
  LogoContainer,
  Input,
  Password,
  Button,
} from "./styles";

import Fundo from "../../assets/Imagens/fundo.jpg";
import Logo from "../../assets/Imagens/logo.jpg";

function login() {
  return (
    <Container>
      <Row>
        <ImgBackground src={Fundo} />
        <Section>
          <LogoContainer src={Logo} />
          <Input placeholder={"Email"} />
          <Input placeholder={"Senha"} />
          <Password>
            <a>Esqueci a senha</a>
          </Password>
          <Link to="/Dashboard">
            <Button>
              Entrar
            </Button>
          </Link>
        </Section>
      </Row>
    </Container>
  );
}

export default login;
