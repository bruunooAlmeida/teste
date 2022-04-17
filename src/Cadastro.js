import React , {Component} from 'react';
import './App.css';

import firebase from './firebase' 

class Pagina extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        nome : "",
        sobrenome : "",
        dtnasc : "",
        email: "",
        senha: "",
        dados: []
      }
     this.enviarDados =  this.enviarDados.bind(this);
     this.listar =  this.listar.bind(this);
     
    }

    
    enviarDados(){
      firebase.firestore().collection("usuario").add({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dtnasc: this.state.dtnasc,
        email: this.state.email,
        senha: this.state.senha,
        
      });
}
  
    listar(){
      firebase.firestore().collection("usuario").get().then((retorno) => {
        var state = this.state;
        retorno.forEach((item) => {        
          state.dados.push({
            id: item.id,
            nome: item.data().nome,
            sobrenome: item.data().sobrenome,
            dtnasc: item.data().dtnasc,
            email: item.data().email,
            senha: item.data().senha
          });
  
        });
        this.setState(state);
      });
    }
  render(){
    return (
      <div className="div">
          <label>Nome:</label><input type="text" name='nome' id='nome' onChange={(e) => this.setState({nome: e.target.value} ) } />
          <label>Sobrenome</label><input type="text" name='sobrenome' id='sobrenome' onChange={(e) => this.setState({sobrenome: e.target.value} ) } />
          <label>DT.Nasc</label><input type="text" name='dtnasc' id='dtnasc' onChange={(e) => this.setState({dtnasc: e.target.value} ) } />
          <label>Email</label> <input type="text" name="user" id="user" onChange={(e) => this.setState({email: e.target.value} ) } placeholder={'Email'}/>
          <label>Senha</label><input type="text" name="password" id="password" onChange={(e) => this.setState({senha: e.target.value} ) }  placeholder={'Senha'} />  
          <button className="botao" onClick={this.enviarDados}> Gravar </button>   
          <button className="botao" onClick={this.listar}> Listar </button>    
          
          <ul> {
            this.state.dados.map((item)=>{
              return(
                <li> {'Nome:' + item.nome + " " + item.sobrenome +
                      'Data:' + item.dtnasc + " " + item.dtnasc +
                      'Email' + item.email + " " + item.senha} 
                </li> 
              )
            })
            }
        </ul>


     </div>     
    )
  }
}


export default Pagina;

//<label>Email</label> <input type="text" name="user" id="user" onChange={ this.handleChange } placeholder={'Email'}/>