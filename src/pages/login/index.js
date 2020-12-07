import React, { useState } from 'react'
import jwt from 'jsonwebtoken'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [token, setToken] = useState('');

  function validate() {
    return email.length > 0 && password.length > 0
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  // }

  //   async function testBackEnd() {

  //     try {//tente executar as linhas de 25 até 37

  //         let retorno = await fetch('http://localhost:8081/users/login', {
  //             method: 'POST',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 'Content-Type': 'application/json',
  //                 'Access-Control-Allow-Origin': '*'
  //             },
  //             body: JSON.stringify({login: email, senha : password})
  //         });
  //         let json = await retorno.json();

  //         localStorage.setItem('token', json.token);

  //         console.log(localStorage.getItem("token"))
  //         if(json.tipo){
  //             routeChange(json.tipo);
  //         }
  //         else{
  //             alert("Usuário não autorizado")
  //         }
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }

  return (
    <Container>
      <Row>
        <ImgBackground src={Fundo} />
        <Section>
          <LogoContainer src={Logo} />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Password>
            <span>Esqueci a senha</span>
          </Password>
          <StyledLink to="/Dashboard">
            <Button type="submit" disabled={!validate()}>
              Entrar
            </Button>
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
