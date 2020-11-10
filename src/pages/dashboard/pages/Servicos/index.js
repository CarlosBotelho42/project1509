import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Container, Card, Row } from './styles'

function Servicos() {
  return (
    <Container>
        <Row>

      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Aréa de Serviço
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Front-end</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Back-end</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Mobile</Dropdown.Item>
          <Dropdown.Item href="#/action-4">UX / UI</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Valor Hora
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">até R$10</Dropdown.Item>
          <Dropdown.Item href="#/action-2">R$11 até R$20</Dropdown.Item>
          <Dropdown.Item href="#/action-3">R$21 até R$30</Dropdown.Item>
          <Dropdown.Item href="#/action-4">apartir de R$31</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </Row>
      <Card />
    </Container>
  )
}

export default Servicos
