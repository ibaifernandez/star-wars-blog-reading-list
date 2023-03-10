import React, { useState } from "react";

const Heartbutton = ({
    name,
    uid,
    addToFavorites,
    category,
    deleteFromFavorites,
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (!isActive) {
            addToFavorites(name, uid, category);
        } else {
            deleteFromFavorites(uid);
        }
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${
                isActive ? "bg-danger rounded" : "outline-danger rounded"
            }`}
            onClick={() => {
                handleClick();
            }}
        >
            ❤️
        </button>
    );
};

export default Heartbutton;
