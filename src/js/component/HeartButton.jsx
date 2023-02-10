import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext.jsx";

const HeartButton = ({ status }) => {
    const { updateValue } = useContext(FavoritesContext);
    const [on, setOn] = useState(status);

    const myFoo = (status) => {
        if (!status) {
            updateValue();
            status = !status;
        } else {
            updateValue();
        }
    };

    return (
        <button className="outline-danger" onClick={myFoo}>
            ❤️
        </button>
    );
};

export default HeartButton;
