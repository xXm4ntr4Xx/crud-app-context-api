import './App.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: '30rem',margin:'4rem auto'}}>
      <Router>
        <Switch>
          <Route exact path='/'component={Home}/>
          <Route path='/add'component={AddUser}/>
          <Route path='/edit/:id'component={EditUser}/>
          
          <Home/>
            <AddUser/>
            <EditUser/>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
//1.create component
//2.import react router
//3.npm i  react-router-dom@5.2.0 so we can use switch
//4. put home route at the end of the route because route will be readed anyway or put exact on route
//5. import bootsrap on the home page