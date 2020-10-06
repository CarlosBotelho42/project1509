import React from 'react'

import {
  Container,
  Row,
  ImgBackground,
  Section,
  LogoContainer,
  Input,
  Password,
  Button,
  Registre,
  StyledLink,
} from './styles'

import Fundo from '../../assets/Imagens/fundo.jpg'
import Logo from '../../assets/Imagens/logo.jpg'

function Login() {
  return (
    <Container>
      <Row>
        <ImgBackground src={Fundo} />
        <Section>
          <LogoContainer src={Logo} />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Password>
            <a>Esqueci a senha</a>
          </Password>
          <StyledLink to="/Dashboard">
            <Button>Entrar</Button>
          </StyledLink>

          <StyledLink to="/Register">
            Não tem conta?{' '}
            <StyledLink to="/Register" style={{ color: '#5ba092' }}>
              Cadastre-se aqui
            </StyledLink>
          </StyledLink>
        </Section>
      </Row>
    </Container>
  )
}

export default Login
