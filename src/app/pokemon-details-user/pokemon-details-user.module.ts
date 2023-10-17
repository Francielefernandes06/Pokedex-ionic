import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDetailsUserPageRoutingModule } from './pokemon-details-user-routing.module';

import { PokemonDetailsUserPage } from './pokemon-details-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDetailsUserPageRoutingModule
  ],
  declarations: [PokemonDetailsUserPage]
})
export class PokemonDetailsUserPageModule {}
