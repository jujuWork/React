import { createContext, useState, useContext, useEffect } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext (MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

        {/* Storing the Favorites Movie */}
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

        {/* Updating the Favorite Movie */}
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

        {/* Adding Movie to Favorites */}
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

        {/* Removing Movies from Favorites */}
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

        {/* Checking if all ID is the same as movieId */}
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

        {/* Creating value for the Provider */}
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value = {value}>
        {children}
    </MovieContext.Provider>
}