import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorite, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem("favorites");
    try {
      return storedFavs ? JSON.parse(storedFavs) : [];
    } catch {
      console.warn("Invalid Favorites");
      return [];
    }
  });

  // Save Favorites to Local Storage every time it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  // Adding Movie to Favorites
  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  // Removing Movies from Favorites
  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Checking if movie is favorited
  const isFavorite = (movieId) => {
    return favorite.some((movie) => movie.id === movieId);
  };

  {
    /* Creating value for the Provider */
  }
  const value = {
    favorite,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
