import React from "react";
import "./GameScore.scss";

interface GameScoreProps {
    wins: number;
    loses: number;
}
export const GameScore = ({ wins, loses }: GameScoreProps) => (
    <div className="GameScore">
        <span>Your score: </span>
        <span className="GameScore__wins">{wins}</span>
        <span> wins, </span>
        <span className="GameScore__loses">{loses}</span>
        <span> loses.</span>
    </div>
);
