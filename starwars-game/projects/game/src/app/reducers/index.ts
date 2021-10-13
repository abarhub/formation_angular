import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { EnemyState } from '../features/enemy/store/reducers';
import * as enemies from '../features/enemy/store/reducers';
import { GameState } from '../features/game/store/reducer';
import * as games from '../features/game/store/reducer';


export interface ApplicationState {
  enemies: EnemyState,
  games: GameState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  enemies: enemies.reducer,
  games: games.reducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
