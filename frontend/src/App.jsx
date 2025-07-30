// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Favorite from './pages/favorite';
// import MovieCard from './components/MovieCard';
import Home from './pages/home';
import {Routes, Route} from 'react-router-dom';

function App() {
  /*const movieNumber = 1 */ /* rendering condition */

  return (
    <main className="main-content"> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Favorite />} />
      </Routes>


    
    {/* { {movieNumber === 1 ? (
      <MovieCard movie={{title: "Tims Film", release_date: "2024"}} />
    ) : (
      <MovieCard movie={{title: "Joes Film", release_date: "2020"}} />
    )} } */}
    </main>
  );
}

export default App
