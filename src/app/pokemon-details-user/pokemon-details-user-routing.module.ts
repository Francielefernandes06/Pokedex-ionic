import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDetailsUserPage } from './pokemon-details-user.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailsUserPageRoutingModule {}
