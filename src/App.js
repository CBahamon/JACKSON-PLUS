import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { MovieDetail } from './components/moviedetail/MovieDetail';
import { Login } from './components/login/Login';
import Menu from './components/Menu';
// import Prueba from './components/Prueba';
import Register from './components/login/Register';



export function App() {
  return (
    <>
      <Menu />
      
      <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={MovieDetail}  />
        <Route path="/login" component={Login}  />
        <Route path="/register" component={Register}  />
      </Switch>
      </div>
    </>
  );
}

export default App;
