import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.page.html',
  styleUrls: ['./my-pokemons.page.scss'],
})
export class MyPokemonsPage implements OnInit {

  meusPokemons: any[] = []; // Inicialize com o tipo de dados correto

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.obterMeusPokemons().subscribe((data) => {
      this.meusPokemons = data; // Supondo que o serviço retorna uma lista de Pokémon
    });
  }

}
