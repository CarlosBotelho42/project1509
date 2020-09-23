/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './login.css';

function Login() {
  return (
<div className="App">
    <div class="esquerda">
    <img class ="Background2" src={require("./Imagens/fundo.jpg")} width="640" height="1024" alt="Background" />
    </div>

<div class="direita">
    <div class="logo">
        <img class ="Logo2" src={require("./Imagens/logo.jpg")} width="609" height="262" alt="Logo" />
    </div>

    <form>
        <div class="email">
            <input type="text" class="email" placeholder="Email" required autofocus />
        </div>

        <div class="senha">
            <input type="password" class="senha" placeholder="Senha" required />
        </div>

    </form>

    <div class="esqueci">
    <a href="#">Esqueci a Senha</a>
    </div>

    <div class="entrar">
    <button type="submit">Entrar</button>
    </div>

    <div class="cadastro1">
    <p>Não tem conta?<a href="#" class="cadastro2"> Cadastre-se aqui</a></p>
    </div>
    
    </div>

    </div>  
  );
}

export default Login;
