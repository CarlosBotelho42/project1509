import React from 'react'

import { Dropdown } from 'react-bootstrap'
import { Container, Button, PersonContainer, Row } from './styles'

import Header from '../Header'

function Cliente() {
  return (
    <Container>
      <Header />
      <Row style={{ justifyContent: 'space-around' }}>
        <Button>
          <h1>00</h1>
          <span>Serviços Finalizados</span>
        </Button>
        <Button>
          <h1>00</h1>
          <span>Serviços em Aberto</span>
        </Button>
        <Button>
          <h1>00</h1>
          <span>Propostas Enviadas</span>
        </Button>
        <Button>
          <h1>00</h1>
          <span>Recomendações</span>
        </Button>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Aréa de Serviço
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Cidade
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Classificação
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Valor Hora
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>

      <Row style={{ justifyContent: 'space-around' }}>
        <PersonContainer>
          <img src="https://picsum.photos/150" style={{ borderRadius: 100 }} />
          <span className="nome">Nome Freelancer</span>
          <span>Cidade - Estado</span>
          <span>Aréa de Serviço</span>
          <span>Valor Hora</span>
          <span>4.5/5</span>
        </PersonContainer>
        <PersonContainer />
        <PersonContainer />
        <PersonContainer />
        <PersonContainer />
      </Row>
    </Container>
  )
}

export default Cliente
