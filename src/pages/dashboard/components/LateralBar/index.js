/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, PageSelector } from './styles'

import logo from '../../../../assets/logoBg.png'

import { selectedPage } from '../../../../store/modules/dashboard/actions'

function LateralBar() {
  const dispatch = useDispatch()

  const isFreelancer = true
  const [select, setSelect] = useState('busca_de_servico')

  const handleSelect = item => {
    dispatch(selectedPage(item))
  }

  const { page } = useSelector(state => state.dashboard)

  return (
    <Container>
      <img src={logo} width={250} style={{ marginBottom: 100 }} />

      <PageSelector>
        <button
          style={
            page === 'meu_perfil'
              ? { backgroundColor: '#157763', color: '#fff' }
              : null
          }
          onClick={() => handleSelect('meu_perfil')}
        >
          Perfil
        </button>
        <button
          style={
            page === 'busca_de_servico'
              ? { backgroundColor: '#157763', color: '#fff' }
              : null
          }
          onClick={() => handleSelect('busca_de_servico')}
        >
          Buscar Serviços
        </button>
        <button
          style={
            page === 'historico'
              ? { backgroundColor: '#157763', color: '#fff' }
              : null
          }
          onClick={() => handleSelect('historico')}
        >
          Historico
        </button>
        <button
          style={
            page === 'mensagem'
              ? { backgroundColor: '#157763', color: '#fff' }
              : null
          }
          onClick={() => handleSelect('mensagem')}
        >
          Mensagens
        </button>
        {isFreelancer ? (
          <>
            <button
              style={
                page === 'meus_servicos'
                  ? { backgroundColor: '#157763', color: '#fff' }
                  : null
              }
              onClick={() => handleSelect('meus_servicos')}
            >
              Meu Serviços
            </button>
          </>
        ) : null}
      </PageSelector>
    </Container>
  )
}

export default LateralBar
