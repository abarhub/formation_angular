import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { RechercheService } from '../../../shared/services/recherche.service';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTableComponent implements OnInit {
  @Input() games: GameDto[] = [];

  toto !: Observable<string>;
  critereRecherche:string='';

  constructor(private rechercheService:RechercheService) { }

  ngOnInit(): void {
    this.toto=this.rechercheService.get();
    this.toto.subscribe(recherche => {
      this.critereRecherche=recherche;
    });
  }



}
