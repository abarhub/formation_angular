import { createAction, props } from "@ngrx/store";
import { EnemyDto } from "projects/game/src/app/core/models/enemy";

export const addRandomEnemyAction = createAction('[UI] - ADD ENEMY');

export const getAllEnemiesFromApiAction = createAction('[EFFET] - GET ALL ENEMIES');


export const updateStateWithEnemiesAction = createAction('[EFFET] - UPDATE ALL ENEMIES',
            props<{ enemies: EnemyDto[] }>());

