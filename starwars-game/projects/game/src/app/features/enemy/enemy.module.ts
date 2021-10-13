import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEnemiesComponent } from './list-enemies/list-enemies.component';
import { EnemyRoutingModule } from './enemy-routing.module';



@NgModule({
  declarations: [
    ListEnemiesComponent
  ],
  imports: [
    CommonModule,
    EnemyRoutingModule
  ],
  exports: [
    ListEnemiesComponent
  ]
})
export class EnemyModule { }
