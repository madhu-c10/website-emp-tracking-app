import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/src/modal';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Features from './pages/features/Features';

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/features' element={<Features/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
