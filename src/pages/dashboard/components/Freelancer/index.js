import React from 'react'

import {
  Container,
  ContentLateralBar,
  LogoContainer,
  Content,
  Button,
  StyledLink,
  HeaderContainer,
  HeaderIcon,
  Row,
} from './styles'

import Header from '../Header'

function Freelancer() {
  return (
    <div>
      <Header />
      <Row style={{ justifyContent: 'space-around' }}>
        <Button>
          <h1>00</h1>
          <spam>Serviços Finalizados</spam>
        </Button>
        <Button>
          <h1>00</h1>
          <spam>Serviços em Aberto</spam>
        </Button>
        <Button>
          <h1>00</h1>
          <spam>Propostas Recebidas</spam>
        </Button>
        <Button>
          <h1>00</h1>
          <spam>Recomendações</spam>
        </Button>
      </Row>
    </div>
  )
}

export default Freelancer
