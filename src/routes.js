import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cadastro from './Cadastro';
//import Principal from './principal';
import Login from './Login';
import Principal from './principal';
import React  from 'react';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Cadastro} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Principal' component={Principal} />        
      </Switch>
    </Router>
  );
}
 
export default App;