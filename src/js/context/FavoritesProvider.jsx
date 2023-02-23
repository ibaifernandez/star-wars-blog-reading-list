import React, { useState, useEffect } from "react";

import FavoritesContext from "./FavoritesContext.jsx";

const FavoritesProvider = ({ children }) => {
    const [favoritesList, setFavoritesList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isActive, setIsActive] = useState(false);

    console.log("Favorites Provider");
    console.log(isActive);

    const updateList = (name, id, category) => {
        setFavoritesList([...favoritesList, { name, id, category }]);
    };

    const deleteCharacterName = (id) => {
        setFavoritesList(
            favoritesList.filter(
                (favoriteCharacter) => favoriteCharacter.id !== id
            )
        );
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoritesList: favoritesList,
                favoritesListLength: favoritesList.length,
                addToFavorites: updateList,
                deleteFromFavorites: deleteCharacterName,
                loaded: loaded,
                setLoaded: setLoaded,
                isActive: isActive,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
