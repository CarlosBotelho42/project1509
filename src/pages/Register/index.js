import React, { useState } from 'react'

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

function Register() {
  const [checkBox, setCheckBox] = useState(false)

  const handleInputChange = () => {
    setCheckBox(!checkBox)
  }

  return (
    <Container>
      <Row>
        <ImgBackground src={Fundo} />
        <Section>
          <LogoContainer src={Logo} />
          <Input placeholder="Nome Completo" />
          <Input placeholder="Email" type="mail" />
          <Input placeholder="Senha" type="password" />
          <label>
            <input
              name="isGoing"
              type="checkbox"
              checked={checkBox}
              onChange={() => handleInputChange()}
            />{' '}
            Estou de acordo com os termos e condições propostos.
          </label>
          <StyledLink to="/Dashboard">
            <Button>Cadastrar</Button>
          </StyledLink>
          <StyledLink to="/Login">
            Já tem conta?{' '}
            <StyledLink to="/Login" style={{ color: '#5ba092' }}>
              Faça login aqui
            </StyledLink>
          </StyledLink>
        </Section>
      </Row>
    </Container>
  )
}

export default Register
