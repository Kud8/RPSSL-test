import axios from "axios";
import { ChoicesType, PlayResultType } from "./types";

export const getAvailableChoices = async () => {
    const response = await axios.get("https://codechallenge.boohma.com/choices");

    return response.data as ChoicesType;
};

// export const getChoice = async () => axios.get("https://codechallenge.boohma.com/choice");

export const play = async (id: number) => {
    const response = await axios.post("https://codechallenge.boohma.com/play", { player: id });

    return response.data as PlayResultType;
};
