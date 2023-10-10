import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPokemonsPageRoutingModule } from './my-pokemons-routing.module';

import { MyPokemonsPage } from './my-pokemons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPokemonsPageRoutingModule
  ],
  declarations: [MyPokemonsPage]
})
export class MyPokemonsPageModule {}
