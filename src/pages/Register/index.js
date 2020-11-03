import React, { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
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
  const [isFreelancer, setIsFreelancer] = useState(false)

  const handleInputChange = () => {
    setCheckBox(!checkBox)
  }

  const handleInputChangeFreelancer = () => {
    setIsFreelancer(!isFreelancer)
  }

  return (
    <Container>
      <Row>
        <ImgBackground src={Fundo} />
        <Section>
          <LogoContainer src={Logo} />
          <label
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Toggle
              defaultChecked={isFreelancer}
              onChange={handleInputChangeFreelancer}
              icons={false}
            />
          </label>
          <span style={{ color: '#a3a3a3' }}>Freelancer</span>
          <Input placeholder="Nome Completo" />
          <Input placeholder="Email" type="mail" />
          <Input placeholder="Senha" type="password" />

          {isFreelancer ? (
            <>
              <Input placeholder="Aréa de atuação" />
              <Input placeholder="Valor Hora" type="number" />
            </>
          ) : null}
          <label>
            <input
              name="isGoing"
              type="checkbox"
              checked={checkBox}
              onChange={() => handleInputChange()}
            />{' '}
            Estou de acordo com os termos e condições propostos.
          </label>
          <StyledLink to="/Login">
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
