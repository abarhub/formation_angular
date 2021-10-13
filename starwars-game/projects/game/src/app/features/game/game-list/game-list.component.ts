import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';
import { ApplicationState } from '../../../reducers';
import { SearchService } from '../../../shared/services/search.service';
import { GameService } from '../services/game.service';
import { addRandomGamesAction } from '../store/actions/games.action';
import { getAllGames } from '../store/selector/games.selector';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService, private searchService: SearchService, private store: Store<ApplicationState>) { }

  ngOnInit(): void {


    /* this.searchService.state.pipe(
      map(value => this.gameService.getAll(value))
    ).subscribe(obs => obs.subscribe(items => this.games = items));

    this.searchService.state.pipe(
      mergeMap(value => this.gameService.getAll(value))
    ).subscribe(items => this.games = items); */

    //this.searchService.state.subscribe(value => this.searchItem = value);
    
    //this.gameService.getAll('', 3).subscribe(items => this.games = items);

    this.store.select(getAllGames).subscribe(items => this.games=items);

  }

  addGame(): void {
    this.store.dispatch(addRandomGamesAction());
  }

}
