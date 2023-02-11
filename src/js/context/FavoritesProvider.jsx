import React, { useState, useEffect } from "react";

import FavoritesContext from "./FavoritesContext.jsx";

const FavoritesProvider = ({ children }) => {
    const [favoritesList, setFavoritesList] = useState([]);

    const updateList = (hero, id) => {
        // console.log(hero);
        setFavoritesList([...favoritesList, { hero, id }]);
    };

    const deleteHeroName = (id) => {
        setFavoritesList(
            favoritesList.filter((favoriteHero) => favoriteHero.id !== id)
        );
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoritesList: favoritesList,
                favoritesListLength: favoritesList.length,
                addToFavorites: updateList,
                deleteFromFavorites: deleteHeroName,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
