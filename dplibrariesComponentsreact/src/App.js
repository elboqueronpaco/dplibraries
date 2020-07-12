import React from 'react';
import { Route } from 'wouter';
import Home from './Pages/Home';
import ButtonPage from './Pages/Button';
import HeaderLayout from './Layouts/Headers';

function App() {
  
  return (
    <div className="App">
        <HeaderLayout />
        <Route component={Home} path='/' />
        <Route component={ButtonPage} path='/buttons' />
    </div>
  );
}

export default App;
