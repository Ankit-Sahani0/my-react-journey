import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // Use a "lazy initializer" function for useState.
    // This runs only once before the first render, preventing a flicker.
    const [favorites, setFavorites] = useState(() => {
        try {
            const storedFav = localStorage.getItem("favorites");
            return storedFav ? JSON.parse(storedFav) : [];
        } catch (error) {
            console.error("Failed to parse favorites from localStorage:", error);
            return []; // Return empty array on error
        }
    });

    // This effect handles saving the state to localStorage whenever it changes.
    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error("Failed to save favorites to localStorage:", error);
        }
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};