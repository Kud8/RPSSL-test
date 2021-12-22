import React, { useEffect, useState } from "react";
import "./Game.scss";
import { ChoicesType, ResultType } from "../../utils/types";
import { getAvailableChoices, play } from "../../utils/api";
import Loader from "../Loader/Loader";
import { ChoiceItem } from "../ChoiceItem/ChoiceItem";
import { GameResult } from "../GameResult/GameResult";
import { ResetGame } from "../ResetGame/ResetGame";
import { addErrorNotification } from "../../utils/notification";
import { addResult, getLoses, getWins } from "../../utils/storage";
import { GameScore } from "../GameScore/GameScore";

export const Game = () => {
    const [choices, setChoices] = useState<ChoicesType | undefined>(undefined);
    const [selectedChoiceId, setSelectedChoiceId] = useState<number | undefined>(undefined);
    const [selectedEnemyChoiceId, setSelectedEnemyChoiceId] = useState<number | undefined>(undefined);
    const [currentPlayResult, setCurrentPlayResult] = useState<ResultType | undefined>(undefined);
    const [wins, setWins] = useState(getWins());
    const [loses, setLoses] = useState(getLoses());

    useEffect(() => {
        getAvailableChoices().then((res) => setChoices(res));
    }, []);

    const handleResetGame = () => {
        setCurrentPlayResult(undefined);
        setSelectedEnemyChoiceId(undefined);
        setSelectedChoiceId(undefined);
    };

    const handleChoiceClick = async (id: number) => {
        setSelectedChoiceId(id);
        try {
            const { results, computer } = await play(id);
            setSelectedEnemyChoiceId(computer);
            setCurrentPlayResult(results);
            addResult(results);
            setWins(getWins());
            setLoses(getLoses());
        } catch (e) {
            addErrorNotification("Error", "Error loading computer choice");
            handleResetGame();
        }
    };

    return (
        <div className="Game">
            {choices ? (
                <>
                    <GameScore wins={wins} loses={loses} />
                    <GameResult result={currentPlayResult} />
                    <div className="Game__choices">
                        {choices.map((choice, i) => (
                            <ChoiceItem
                                key={choice.id}
                                choice={choice}
                                onClick={handleChoiceClick}
                                isSelected={choice.id === selectedChoiceId}
                                isSelectedByEnemy={choice.id === selectedEnemyChoiceId}
                                disabled={currentPlayResult !== undefined}
                            />
                        ))}
                    </div>
                    <ResetGame
                        onReset={handleResetGame}
                        selectedChoiceId={selectedChoiceId}
                        currentPlayResult={currentPlayResult}
                    />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};
