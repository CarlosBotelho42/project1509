import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #f9f9f9;
  width: 100%;
  height: 100vh;
`
export const Content = styled.div`
  flex: 1;
  padding: 50px;
`

/**
 *
 *  Telas
 *
 */

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`

export const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
`

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserPhoto = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  border-width: 2px;
  border-style: solid;
  border-color: #157763;
  margin-right: 10px;
`
export const UserName = styled.span``
export const Role = styled.span``

export const Card = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`
