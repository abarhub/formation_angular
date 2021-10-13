import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEnemiesComponent } from './list-enemies/list-enemies.component';

const routes: Routes = [{
  path: '',
  component: ListEnemiesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnemyRoutingModule { }
