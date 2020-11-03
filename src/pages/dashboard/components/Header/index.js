import React from 'react'

import { HeaderC, HeaderContainer, HeaderIcon } from './styles'

function Header() {
  return (
    <HeaderC>
      <HeaderContainer>
        <h3>Nome</h3>
        <h5>role</h5>
      </HeaderContainer>
      <HeaderIcon />
    </HeaderC>
  )
}

export default Header
