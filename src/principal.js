import React , {Component} from 'react';
import './App.css';

import firebase from './firebase' 

class Pagina extends Component{
    constructor(props){
      super(props);
      
      this.state = {
        UID: "",
        email: ""
      }
          
      //this.ChangeEmail  = this.handleChangeEmail.bind(this);
      //this.ChangeSenha  = this.handleChangeSenha.bind(this);

      this.mostrarDados =  this.mostrarDados.bind(this);

      firebase.auth().onAuthStateChanged((user) => {
        if(user){

          this.setState({
            UID: user.uid,
            email: user.email
          })

          this.state.email = user.email
          this.mostrarDados(user)
        }else{
          console.log('não encontrei');

        }
      })      
    }
  
    mostrarDados(user){
      this.state.email = user.email
      console.log(this.state.email)
    }  

    render(){
      return (
        <div>
           <h1>
             Dados
           </h1>

          Uid: {this.state.UID} <br></br>
          Email: {this.state.email}
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
