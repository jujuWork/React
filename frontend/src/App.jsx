// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import MovieCard from './components/MovieCard';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  /*const movieNumber = 1 */ /* rendering condition */

  return (
    <div>
      <NavBar />
      <main className="main-content"> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
