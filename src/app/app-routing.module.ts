import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Sites/main/main.component';
import { GameComponent } from './Sites/game/game.component';
import {HistoryComponent} from './Sites/history/history.component';


const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    data : {some_data : 'some value'}
  },
  
  {
    path: '',
    component: MainComponent,
  },

  {
    path: 'history',
    component: HistoryComponent,

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
