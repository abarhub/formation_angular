import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { RechercheService } from '../../../shared/services/recherche.service';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTableComponent implements OnInit,OnDestroy {
  @Input() games: GameDto[] = [];

  toto !: Observable<string>;
  critereRecherche:string='';
  tmp !: Subscription;

  constructor(private rechercheService:RechercheService) { }

  ngOnInit(): void {
    this.toto=this.rechercheService.get();
    this.tmp=this.toto.subscribe(recherche => {
      this.critereRecherche=recherche;
    });
  }

  ngOnDestroy(): void {
    this.tmp.unsubscribe();
  }



}
