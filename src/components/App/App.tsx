import React from "react";
import "./App.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Rules } from "../Rules/Rules";
import { Game } from "../Game/Game";

export const App = () => (
    <div className="App">
        <Header />
        <Rules />
        <Game />
        <Footer />
    </div>
);
