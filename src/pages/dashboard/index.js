import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import {
  Container,
  ContentLateralBar,
  LogoContainer,
  Content,
  Button,
  StyledLink,
  Header,
  HeaderContainer,
  HeaderIcon,
  Row,
} from './styles'

import Freelancer from './components/Freelancer'
import Cliente from './components/Cliente'

import Logo from '../../assets/Imagens/aaaaa.png'

function Dashboard() {
  const [isFreelancer, setIsFreelancer] = useState(false)

  const handleInputChangeFreelancer = () => {
    setIsFreelancer(!isFreelancer)
  }

  return (
    <Container>
      <ContentLateralBar>
        <LogoContainer src={Logo} />
        <StyledLink>Busca de Serviço</StyledLink>
        <StyledLink>Historico</StyledLink>
        <StyledLink>Mensagens</StyledLink>
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
          <span style={{ color: 'white' }}>Freelancer</span>
        </label>
      </ContentLateralBar>
      <Content>{isFreelancer ? <Freelancer /> : <Cliente />}</Content>
    </Container>
  )
}

export default Dashboard
