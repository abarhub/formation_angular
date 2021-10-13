import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { EnemyService } from "../../services/enemy.service";
import { getAllEnemiesFromApiAction, updateStateWithEnemiesAction } from "../actions/enemies.actions";

@Injectable()
export class EnemiesEffect {

    constructor(private actions$: Actions,
        private service: EnemyService) {

    }

    loadEnemies$ = createEffect(
        ()=>this.actions$.pipe(
            ofType(getAllEnemiesFromApiAction),
            concatMap(action => this.service.getAll()),
            map(enemies => updateStateWithEnemiesAction({enemies: enemies}))
        )
    );

}