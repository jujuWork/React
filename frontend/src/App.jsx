// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 1 /* rendering condition */

  return (
    <> 
    {movieNumber === 1 ? ( /* getting the movieNumber starting */
      <MovieCard movie={{title: "Tims Film", release_date: "2024"}} />
    ) : (
      <MovieCard movie={{title: "Joes Film", release_date: "2020"}} />
    )}
    </>
  );
}

export default App
