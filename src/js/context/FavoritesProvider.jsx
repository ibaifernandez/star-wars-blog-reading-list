import React, { useState } from "react";

import FavoritesContext from "./FavoritesContext.jsx";

const FavoritesProvider = ({ children }) => {
    const [favoritesNumber, setFavoritesNumber] = useState(0);
    const [favoritesList, setFavoritesList] = useState([]);
    const [isActive, setIsActive] = useState(false);

    const updateNumber = () => {
        if (!isActive) {
            setFavoritesNumber(favoritesNumber + 1);
            setIsActive(true);
        } else {
            setFavoritesNumber(favoritesNumber - 1);
            setIsActive(false);
        }
    };

    const updateList = () => {};

    return (
        <FavoritesContext.Provider
            value={{
                value: favoritesNumber,
                updateValue: updateNumber,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
