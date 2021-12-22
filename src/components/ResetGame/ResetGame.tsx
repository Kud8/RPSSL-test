import React from "react";
import "./ResetGame.scss";
import Loader from "../Loader/Loader";
import { ResultType } from "../../utils/types";

interface ResetGameProps {
    selectedChoiceId?: number;
    currentPlayResult?: ResultType;
    onReset?: () => void;
}
export const ResetGame = ({ onReset, selectedChoiceId, currentPlayResult }: ResetGameProps) => {
    if (selectedChoiceId === undefined) {
        return null;
    }

    if (currentPlayResult === undefined) {
        return <Loader />;
    }

    return (
        <button className="ResetGame__button" onClick={onReset}>
            Start a new game
        </button>
    );
};
