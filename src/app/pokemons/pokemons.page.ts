import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})

export class PokemonsPage implements OnInit {
  pokemons: any[] = [];


  constructor( private pokemonService: PokemonService,
    private router: Router) { }

  ngOnInit() {
    // Fazer uma solicitação ao serviço para obter a lista de pokémons
    this.pokemonService.getPokemons().subscribe((data: any[]) => {
      this.pokemons = data;
      console.log(data);
    });
  }

  // onPokemonClick(pokemonId: number) {
  //   // Navegar para a página de detalhes do Pokémon com o ID como parâmetro
  //   this.navCtrl.navigateForward(`/pokemon-details/${pokemonId}`);
  // }

  mostrarDetalhes(pokemonId: number) {
    // Navegar para a página de detalhes do Pokémon e passar o ID como parâmetro
    this.router.navigate(['/details-poke', pokemonId]);
  }
}
