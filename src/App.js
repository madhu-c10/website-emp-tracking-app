import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/modal';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';

const App = () => {
  return (
    <div>
      <Nav/>
    </div>
  )
}

export default App;
