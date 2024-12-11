import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Article } from './components/Article';
import { Nav } from './components/Nav';

import './App.css'

function App() {

  return (
    <>

    <Header/>
      <Nav/>
      <Article/>
      <hr/>
      <Nav/>
      <Footer/>
    </>
  )
}

export default App
