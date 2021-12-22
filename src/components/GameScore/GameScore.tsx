import React from "react";
import "./GameScore.scss";

interface GameScoreProps {
    wins: number;
    loses: number;
    onReset: () => void;
}
export const GameScore = ({ wins, loses, onReset }: GameScoreProps) => (
    <div className="GameScore">
        <span>Your score: </span>
        <span className="GameScore__wins">{wins}</span>
        <span> wins, </span>
        <span className="GameScore__loses">{loses}</span>
        <span> loses. </span>
        <span onClick={onReset} className="GameScore__reset">
            Reset
        </span>
    </div>
);
