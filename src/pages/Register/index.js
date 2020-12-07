import React, { useState } from 'react'
import Toggle from 'react-toggle'
import api from '../../apiservice'
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
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [specialty, setSpecialty] = useState('')

  const [checkBox, setCheckBox] = useState(false)
  const [isFreelancer, setIsFreelancer] = useState(false)

  const handleInputChange = () => {
    setCheckBox(!checkBox)
  }

  const handleInputChangeFreelancer = () => {
    setIsFreelancer(!isFreelancer)
  }

  async function realizaCadastro() {
    try {
      const retorno = await fetch('http://localhost:8081/user/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          Nome: name,
          Cpf: cpf,
          Email: email,
          Senha: password,
          Função: role,
          Especialidade: specialty,
        }),
      })

      let json = await retorno.json()
      console.log(json)
      return retorno
      //alert('Cadastro realizada com sucesso.')
    } catch (error) {
      console.error(error)
      //alert('Erro no Cadastro do usuario.')
    }
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
          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="Cpf"
            type="text"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
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
          <Input
            placeholder="Função"
            type="text"
            value={role}
            onChange={e => setRole(e.target.value)}
          />

          {isFreelancer ? (
            <>
              <Input
                placeholder="Especialidade"
                type="text"
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}
              />
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
            <Button type="submit" onclick={() => realizaCadastro()}>
              Cadastrar
            </Button>
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
