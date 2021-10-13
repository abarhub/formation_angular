import { createReducer, on } from "@ngrx/store";
import { GameDto } from "projects/game/src/app/core/models/game.dto";
import { addRandomGamesAction } from "../actions/games.action";


export interface GameState {
    items: GameDto[];
}

const defaultState: GameState = {
    items: []
};

export const reducer = createReducer(defaultState,
    on(addRandomGamesAction, (state, action) => {
        const newArray = [...state.items];

        const newRandomGame: GameDto = {
            id: Math.random() * 100,
            success: true,
            title: Math.random() * 10
        };
        newArray.push(newRandomGame);

        return {
            items: newArray
        };
    })

);

