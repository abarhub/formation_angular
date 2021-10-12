import { Component, OnInit } from '@angular/core';
import { RechercheService } from '../../services/recherche.service';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  valeurRecherche: string='';

  constructor(private rechercheService: RechercheService) { }

  ngOnInit(): void {
  }

  recherche(): void {
    this.rechercheService.recherche(this.valeurRecherche);
  }

}
