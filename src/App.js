import React from 'react'
import { Home, About , Portfolio} from './pages'
import { Header } from './layout'
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>

      </Routes>
    </>
  );
}

export default App;
