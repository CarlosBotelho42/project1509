import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from './styles'

function Dashboard() {
  return (
    <div>
      <h1> EM CRIAÇÂO</h1>
      <Link to="/">
        <Button>Ir Para Landing</Button>
      </Link>

      <Link to="/Login">
        <Button>Ir Para Login</Button>
      </Link>
    </div>
  )
}

export default Dashboard
