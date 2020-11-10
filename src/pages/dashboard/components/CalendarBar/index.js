import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import {
  Container,
  Header,
  Title,
  ContainerUser,
  UserPhoto,
  UserName,
  Role,
} from './styles'

function CalendarBar() {
  const [value, onChange] = useState(new Date())

  return (
    <Container>
      <Header>
        <ContainerUser>
          <UserPhoto />
          <UserName>Nome do usuario</UserName>
        </ContainerUser>
      </Header>
      <Calendar onChange={onChange} value={value} />
    </Container>
  )
}

export default CalendarBar
