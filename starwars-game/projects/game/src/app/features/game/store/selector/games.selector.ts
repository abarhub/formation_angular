import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";


const defaultState = (state : ApplicationState) => state.games;


export const getAllGames = createSelector(defaultState,  state=> state.items);


