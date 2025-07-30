// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  /*const movieNumber = 1 */ /* rendering condition */

  return (
    <main className="main-content"> 
      <Routes></Routes>


    
    {/* { {movieNumber === 1 ? (
      <MovieCard movie={{title: "Tims Film", release_date: "2024"}} />
    ) : (
      <MovieCard movie={{title: "Joes Film", release_date: "2020"}} />
    )} } */}
    </main>
  );
}

export default App
