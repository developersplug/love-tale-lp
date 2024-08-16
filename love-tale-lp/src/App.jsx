import React from 'react'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Products from './components/Products/Products';
import Safety from './components/Safety/Safety';
import Learn from './components/Learn/Learn';
import Downloads from './components/Downloads/Downloads';
import Home from './components/Home/Home';
import DatingAdvice from './DatingAdvice/DatingAdvice';
import Groups from './components/Groups/Groups'
import Availability from './components/Availability/Availability';
import Bottomsec from './components/Bottom/Bottomsec';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/safety' element={<Safety />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/downloads' element={<Downloads />} />
        </Routes>
      </Router>
      <Register/>
        <DatingAdvice />
        <Groups />
        <Availability />
        <Bottomsec />
        <Footer/>
    </div>
  )
}

export default App
