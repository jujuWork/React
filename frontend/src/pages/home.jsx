import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/NavBar.css";

function Home() {
    const [searchQuery, setSearcgQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setError("Failed to Load Movies");
            }
            finally {
                setLoading(false)
            }
        }
            setLoading();
    }, []);

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