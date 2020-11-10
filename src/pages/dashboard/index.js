import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import {
  Container,
  Content,
  Header,
  Title,
  ContainerUser,
  UserPhoto,
  UserName,
  Role,
  Card,
} from './styles'

import LateralBar from './components/LateralBar'
import CalendarBar from './components/CalendarBar'

import Servicos from './pages/Servicos'
import MeusServicos from './pages/MeusServicos'

function Dashboard() {
  const [isFreelancer, setIsFreelancer] = useState(false)
  const [title, setTitle] = useState('')

  const handleInputChangeFreelancer = () => {
    setIsFreelancer(!isFreelancer)
  }

  const { page } = useSelector(state => state.dashboard)

  useEffect(() => {
    if (page !== null) {
      switch (page) {
        case 'meu_perfil': {
          setTitle('Minha Area')
          break
        }
        case 'busca_de_servico': {
          setTitle('Buscar Serviços')
          break
        }
        case 'historico': {
          setTitle('Historico')
          break
        }
        case 'mensagem': {
          setTitle('Mensagem')
          break
        }
        case 'meus_servicos': {
          setTitle('Meus Serviços')
          break
        }
        default:
          break
      }
    }
  }, [page])

  return (
    <Container>
      <LateralBar />

      <Content>
        <Header>
          <Title>{title}</Title>
        </Header>

        {page === 'meu_perfil' ? null : page === 'busca_de_servico' ? (
          <Servicos />
        ) : page === 'historico' ? null : page === 'mensagem' ? null : page ===
          'meus_servicos' ? (
          <MeusServicos />
        ) : (
          <h1>Page Not Found</h1>
        )}
      </Content>

      <CalendarBar />
    </Container>
  )
}

export default Dashboard
