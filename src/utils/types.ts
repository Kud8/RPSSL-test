export type ChoiceType = {
    id: number;
    name: string;
};

export type ChoicesType = ChoiceType[];

export type ResultType = "win" | "lose" | "tie";
export type PlayResultType = {
    results: ResultType;
    player: number;
    computer: number;
};
