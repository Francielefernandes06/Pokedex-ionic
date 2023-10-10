import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPokemonsPage } from './my-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: MyPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPokemonsPageRoutingModule {}
