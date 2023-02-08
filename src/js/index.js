import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Luke from "./pages/Luke.jsx";
import "../styles/index.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="luke" element={<Luke />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#app"));
