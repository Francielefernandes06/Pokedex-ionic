import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPokePageRoutingModule } from './details-poke-routing.module';

import { DetailsPokePage } from './details-poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPokePageRoutingModule
  ],
  declarations: [DetailsPokePage]
})
export class DetailsPokePageModule {}
