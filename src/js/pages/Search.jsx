import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
    const query = useParams();

    // useLayoutEffect(() => {}, []);

    return (
        <h1 className="h1 text-center mt-3">
            These are the results on your query:
        </h1>
    );
};

export default Search;
