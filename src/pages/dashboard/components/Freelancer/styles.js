import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(32.86deg, #5ca193 49.32%, #82b6ac 67.55%);
  width: 100%;
  height: 100vh;
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

  spam {
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
