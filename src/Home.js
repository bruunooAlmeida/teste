import React , {Component} from 'react';
import './App.css';

class Pagina extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        email: "Digite Email",
        senha: "Digite Senha"
      }
      
      
    }
  

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeSenha(event) {
    this.setState({senha: event.target.value});
  }

  validarDados(){        
    if(this.state.email === 'eduardo.lino@pucpr.br' && this.state.senha === '123456'){
        alert('Acessado com sucesso!');      
      }else alert("Usuário ou senha incorretos!");                                    
    }
  
    render(){
      return (
        <div className="div">
             <h1>Usuarios Cadastrados</h1>
            <button className="botao" onClick={this.validarDados}> Acessar </button>                    
       </div>     
      )
    }
  }


function App() {
  return (
    <div>
      <Pagina/>
    </div>
  );
}

export default App;
