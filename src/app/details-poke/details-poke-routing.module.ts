import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPokePage } from './details-poke.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPokePageRoutingModule {}
