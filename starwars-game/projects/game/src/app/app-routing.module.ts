import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { CreateProfilComponent } from './shared/components/create-profil/create-profil.component';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},{
  path: 'create-profile',
  component: CreateProfilComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
