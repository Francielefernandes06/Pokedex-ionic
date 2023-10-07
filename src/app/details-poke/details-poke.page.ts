import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailsService } from '../pokemon-details.service';

@Component({
  selector: 'app-details-poke',
  templateUrl: './details-poke.page.html',
  styleUrls: ['./details-poke.page.scss'],
})
export class DetailsPokePage implements OnInit {
  pokemonDetails: any;
  pokemonId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonDetailsService: PokemonDetailsService
  ) { }

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.pokemonId = +idParam;
      // Chamar o serviço para buscar os detalhes do Pokémon com base no ID
      this.pokemonDetailsService.getPokemonDetailsById(this.pokemonId).subscribe((data: any) => {
        this.pokemonDetails = data.original;
        console.log(this.pokemonDetails);

      });
    }
  }

  getTipoImage(tipo: string): string {
    // Aqui você pode fazer um mapeamento de tipos para URLs de imagem
    // Por exemplo:
    if (tipo === 'water') {
      return '../../assets/img/agua.png';
    } else if (tipo === 'fire') {
      return '../../assets/img/fogo.png';
    }
    else if (tipo === 'grass') {
      return '../../assets/img/planta.png';
    }
    else if (tipo === 'fire') {
      return '../../assets/img/fogo.png';
    }
    else if (tipo === 'bug') {
      return '../../assets/img/poison.png';
    }

    return '../../assets/img/pokemon.png';
  }
}
