import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-items: flex-end;
  background-color: #f3f3f3;
  height: 30px;
  padding: 10px;

  a {
    color: #157763;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #157763;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 20%;

  a {
    color: #9c9c9c;
  }
`
export const LogoContainer = styled.img`
  background-repeat: no-repeat;
  padding: 1em;
  width: 200px;
`

export const LogoContainerLanding = styled.img`
  background-repeat: no-repeat;
  height: 20%;

  margin: 40px 10px 10px 10px;
`

export const TextContainer = styled.div`
  margin: 20px;
  width: 500px;
  font-style: italic;
`
export const TextTitle = styled.h2`
  color: #0f473c;
  margin-bottom: 20px;
  font-size: 36px;
`
export const TextContent = styled.h4`
  color: #0f473c;
  font-size: 36px;
  font-weight: 100;
`
export const ContainerMidPage = styled.div`
  margin-top: 100px;
  background-color: #136c78;
  height: 500px;
  width: 100%;
`

export const WhiteText = styled.h3`
  font-style: italic;
  color: white;
  font-size: 28px;
  font-weight: 100;
  padding-left: 70px;
`

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 200px;
  /* border-radius: 10px; */
  padding: 5px 20px 20px 20px;
  border-top: solid 2px #136c78;
  border-bottom: solid 2px #136c78;

  a {
    text-align: center;
  }
`

export const UserPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`

export const Button = styled.button`
  background: #5ba092;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.8em 5em;
  border: 2px solid #5ba092;
  border-radius: 100px;

  :active {
    background-color: #05a484;
  }
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
  }
`
export const Footer = styled.div`
  background-color: #136c78;
  margin-top: 50px;

  p {
    color: white;
    padding: 5px 5px 5px 50px;
  }
`
