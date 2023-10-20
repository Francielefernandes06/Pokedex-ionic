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
  pokemonName: string = '';
  pokemon: any;
  
  currentPage: number = 0;
  errorMessage: string | undefined;




  constructor( private pokemonService: PokemonService,
    private router: Router,  private navCtrl: NavController) { }

  ngOnInit() {
    this.pokemonService.getPokemons(this.currentPage).subscribe((data: any[]) => {
      this.pokemons = data;
      console.log(data);
    });
  }

  getPokemons() {
    this.pokemonService.getPokemons(this.currentPage)
      .subscribe((data: any[]) => {
        this.pokemons = data;
        console.log(data);
      });
  }


  searchPokemon() {
    if (this.pokemonName) {
      const pokemonName = this.pokemonName.toLowerCase(); // Converte para minúsculas
      this.pokemonService.getPokemonByName(pokemonName)
        .subscribe(
          (data) => {
            this.pokemon = data;
            this.errorMessage = '';
          },
          (error) => {
            this.pokemon = null;
            this.errorMessage = 'Pokémon não encontrado.';
          }
        );
    } else {
      this.errorMessage = 'Por favor, insira o nome do Pokémon.';
    }
  }





  changePagination(direction: number) {
    if (direction === 0) {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getPokemons();
      }
    } else if (direction === 1) {
      this.currentPage++;
      this.getPokemons();
    }
  }


  mostrarDetalhes(pokemonId: number) {

    this.navCtrl.navigateForward(`/details-poke/${pokemonId}` );
  }
}
