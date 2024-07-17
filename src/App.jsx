import React from 'react';
import Hero from './components/Hero/Hero';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      {/* <Routes> */}
      <Navbar />
      <Hero />
      <Footer />
      {/* <Route exact path="/" component={Home} /> */}
      {/* </Routes> */}
    </div>
  );
};

export default App;
