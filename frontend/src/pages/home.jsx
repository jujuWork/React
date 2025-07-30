import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/NavBar.css";

function Home() {
    const [searchQuery, setSearcgQuery] = useState("");

    const movies = [
        {id:1, title: "John Wick", release_date: "2020"},
        {id:2, title: "Terminator", release_date: "2021"},
        {id:3, title: "Godzilla", release_date: "2023"},
    ]

    const handleSearch = () => {
        alert(searchQuery)
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search"
                value={searchQuery}
                onChange={(e) => setSearcgQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movie-grid">
            {movies.map((movie) => (
                ( 
                <MovieCard movie={movie} key={movie.id} />
                )
            ))}
        </div>
    </div>
}

export default Home