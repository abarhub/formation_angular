import { Component, OnInit } from '@angular/core';
import { EnemyDto } from '../../../core/models/enemy';
import { EnemyService } from '../services/enemy.service';

@Component({
  selector: 'game-list-enemies',
  templateUrl: './list-enemies.component.html',
  styleUrls: ['./list-enemies.component.css']
})
export class ListEnemiesComponent implements OnInit {
  //enemies: string[] = []; //['1', '2'];
  enemies !: EnemyDto[]; //['1', '2'];

  constructor(private service:EnemyService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(item => this.enemies=item);
  }

}
