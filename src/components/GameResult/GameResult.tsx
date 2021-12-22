import React from "react";
import "./GameResult.scss";
import { ResultType } from "../../utils/types";

interface GameResultProps {
    result?: ResultType;
}
export const GameResult = ({ result }: GameResultProps) => {
    switch (result) {
        case "win":
            return <div className="GameResult--win">You win =)</div>;
        case "lose":
            return <div className="GameResult--lose">You lose =(</div>;
        case "tie":
            return <div className="GameResult--tie">Tie ¯\_(ツ)_/¯</div>;
        default:
            return <div className="GameResult">Please make a choice</div>;
    }
};
