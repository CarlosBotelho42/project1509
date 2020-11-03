import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  Header,
  Row,
  LogoContainer,
  ContainerHeaderList,
  TextTitle,
  TextContent,
  TextContainer,
  LogoContainerLanding,
  ContainerMidPage,
  Column,
  WhiteText,
  UserBox,
  UserPhoto,
  StyledLink,
  Button,
  Footer,
} from './styles'

import Logo from '../../assets/Imagens/logo.jpg'
import LandingPageImg from '../../assets/Cool_Kids_Fresh_Air.png'
import LandingPageImg2 from '../../assets/Cool_Kids_Alone_Time.png'
import LandingPageImg3 from '../../assets/Cool_Kids_Standing.png'

function Landing() {
  return (
    <Container>
      <Row>
        <LogoContainer src={Logo} />
        <ContainerHeaderList>
          <a>Inicio</a>
          <a>Como funciona ?</a>
          <a>Sobre</a>
          <StyledLink to="/Login">Login</StyledLink>
        </ContainerHeaderList>
      </Row>

      <Row>
        <LogoContainerLanding src={LandingPageImg} />

        <TextContainer>
          <TextTitle>
            Yoloy é uma plataforma para publicação e procura de serviços
            oferecidos por profissionais autônomos.{' '}
          </TextTitle>
          <TextContent>
            Nossa aplicação tem como objetivo ajudar na busca desses serviços para
            clientes interessados, possuindo várias categorias em diversas
            áreas, assim, formamos a conexão entre os profissionais e clientes.
          </TextContent>
        </TextContainer>
      </Row>

      <Column style={{ marginBottom: 20 }}>
        <ContainerMidPage style={{ zIndex: 0, position: 'absolute' }} />
        <Row style={{ zIndex: 10 }}>
          <Column style={{ justifyContent: 'center', alignItems: 'center' }}>
            <WhiteText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ultricies nunc eget nibh aliquet, at elementum arcu pulvinar. In
              blandit ante et imperdiet condimentum. Aenean sed viverra enim.
              Nullam eu est mi. Mauris consequat elit orci, ut condimentum odio
              finibus sit amet. Cras vitae porttitor nisl.
            </WhiteText>
            <StyledLink to="/Register">
              <Button>Cadastre-se já</Button>
            </StyledLink>
          </Column>
          <LogoContainerLanding src={LandingPageImg2} />
        </Row>
      </Column>

      <Row>
        <TextTitle>Avaliações dos usuarios</TextTitle>
      </Row>

      <Row>
        <UserBox>
          <UserPhoto src="https://picsum.photos/100/100" />
          <a style={{ fontWeight: 'bold' }}>Amenadiel Lux</a>
          <a style={{ fontStyle: 'italic' }}>Front-End</a>
          <a>
            Pessima qualidade, não acha um cliente com esse marketing furado.
          </a>
        </UserBox>
        <UserBox>
          <UserPhoto src="https://picsum.photos/100/100" />
          <a style={{ fontWeight: 'bold' }}>Amenadiel Lux</a>
          <a style={{ fontStyle: 'italic' }}>Front-End</a>
          <a>
            Pessima qualidade, não acha um cliente com esse marketing furado.
          </a>
        </UserBox>
        <UserBox>
          <UserPhoto src="https://picsum.photos/100/100" />
          <a style={{ fontWeight: 'bold' }}>Amenadiel Lux</a>
          <a style={{ fontStyle: 'italic' }}>Front-End</a>
          <a>
            Pessima qualidade, não acha um cliente com esse marketing furado.
          </a>
        </UserBox>
        <UserBox>
          <UserPhoto src="https://picsum.photos/100/100" />
          <a style={{ fontWeight: 'bold' }}>Amenadiel Lux</a>
          <a style={{ fontStyle: 'italic' }}>Front-End</a>
          <a>
            Pessima qualidade, não acha um cliente com esse marketing furado.
          </a>
        </UserBox>
      </Row>
      <Footer>
        <p>Todos os Direitos Reservados @YOLOY LTDA</p>
      </Footer>
    </Container>
  )
}

export default Landing
