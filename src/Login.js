import React , {Component} from 'react';
import './App.css';

import firebase from './firebase' 

class Pagina extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        email: "",
        senha: ""
      }
     this.login =  this.login.bind(this);
    }
    
  login(){
      console.log(this.state.email,this.state.senha);
      const auth = firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
      .then((userCredential) => {
        console.log ('teste');
      //  const user = userCredential.user;
        window.location.href= '/principal'
      })
    .catch((error) => {
      console.log(error);
       const errorCode = error.code;
       const errorMessage = error.Message;
       console.log('Code',errorCode);
       console.log('Message',errorMessage);
  })}
  render(){
    return (
      <div className="div">
          
          <label>Email</label> <input type="text" name="user" id="user" onChange={(e) => this.setState({email: e.target.value} ) } placeholder={'Email'}/>
          <label>Senha</label><input type="text" name="password" id="password" onChange={(e) => this.setState({senha: e.target.value} ) }  placeholder={'Senha'} />  
          <button className="botao" onClick={this.login}> Acessar </button>                    
     </div>     
    )
  }
}


export default Pagina;

//<label>Email</label> <input type="text" name="user" id="user" onChange={ this.handleChange } placeholder={'Email'}/>