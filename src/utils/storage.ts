import { ResultType } from "./types";

export const getWins = () => +(localStorage.getItem("wins") ?? 0);

export const getLoses = () => +(localStorage.getItem("loses") ?? 0);

export const addResult = (result: ResultType) => {
    switch (result) {
        case "win":
            localStorage.setItem("wins", `${getWins() + 1}`);
            break;
        case "lose":
            localStorage.setItem("loses", `${getLoses() + 1}`);
            break;
        default:
            break;
    }
};

export const resetResults = () => {
    localStorage.setItem("wins", "0");
    localStorage.setItem("loses", "0");
};
