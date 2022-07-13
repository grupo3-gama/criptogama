import React from 'react'
import './css/Login.css'
import LogImg from '../Assets/images/log.png'
import RegImg from '../Assets/images/register.png'
import User from '../Assets/images/user.png'
import Lock from '../Assets/images/lock.png'

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        tab: "container-login"
    }
}

  
render(){

  return (
    <div className={this.state.tab === "container-login" ? "container-login" : "container-login sign-up-mode"}>
    <div className="forms-container-login">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Fazer Login</h2>
          <div className="input-field">
            <i className='userico'><img className='userimg' src={User}></img></i>
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
                <i className='userico'><img className='userimg' src={Lock}></img></i>
            <input type="password" placeholder="Senha" />
          </div>
          <div className='form-footer'>
            <a clas href={`/`}>Voltar para Home</a>
            <input type="submit" value="Entrar" className="btn solid" />
          </div>
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Registrar-se</h2>
          <div className="input-field">
            <i className='userico'><img className='userimg' src={User}></img></i>
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
                <i className='userico'><img className='userimg' src={Lock}></img></i>
            <input type="password" placeholder="Senha" />
          </div>
          <div className='form-footer'>
            <a clas href={`/`}>Voltar para Home</a>
            <input type="submit" className="btn solid" value="Registrar"/>
          </div>
        </form>
      </div>
    </div>

    <div className="panels-container-login">
      <div className="panel left-panel">
        <div className="content">
          <h3>Novo Aqui ?</h3>
          <p>
            Registre-se agora e conheça a nossa inovadora corretora, seja bem vindo a Cryptogama!
          </p>
          <button id="sign-up-btn" className={this.state.tab === "btn transparent" ? "btn transparent" : "btn transparent"} onClick={() => this.setState({tab: "containe"})}>
            Registrar
          </button>
        </div>
        <img src={LogImg} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Já é cadastrado?</h3>
          <p>
            Faça login na plataforma e não perca tempo para comprar ou vender suas cryptos!
          </p>
          <button id="sign-up-btn" className={this.state.tab === "btn transparent" ? "btn transparent" : "btn transparent"} onClick={() => this.setState({tab: "container-login"})}>
            Login
          </button>
        </div>
        <img src={RegImg} className="image" alt="" />
      </div>
    </div>
  </div>
  )
}
}

export default Login