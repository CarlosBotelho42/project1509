import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  h2 {
    font-size: 1.4em;
    color: #707070;
  }
`

export const ContentLateralBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Content = styled.div`
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding: 25px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.div`
  background: #f0f0f0;
  color: white;
  width: 20%;
  height: 100px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    padding: 30px;
    width: 90%;
    color: #707070;
    font-size: 1.2em;
  }

  h1 {
    color: #0f473c;
    font-size: 3em;
  }
`

export const LogoContainer = styled.img`
  background-repeat: no-repeat;
  padding: 1em;
  width: 200px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-decoration: inherit;
  margin: 10px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  h5 {
    color: #5ca193;
  }
`
export const HeaderIcon = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #5ca193; */
  border-width: 2px;
  border-style: solid;
  border-color: #5ca193;
  border-radius: 50px;
  margin-right: 20px;
`

export const PersonContainer = styled.div`
  background: #f0f0f0;
  color: white;
  width: 15%;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  span {
    color: black;
    padding: 0.5em;
    &.nome {
      color: #5ca193;
      font-weight: bold;
    }
  }
`
