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


  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }


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
      return '../../assets/img/inseto.png';
    }
    else if (tipo === 'electric') {
      return '../../assets/img/eletrico.png';
    }
    else if (tipo === 'poison') {
      return '../../assets/img/veneno.png';
    }
    else if (tipo === 'ground') {
      return '../../assets/img/terra.png';
    }
    else if (tipo === 'fairy') {
      return '../../assets/img/fada.png';
    }
    else if (tipo === 'fighting') {
      return '../../assets/img/lutador.png';
    }
    else if (tipo === 'psychic') {
      return '../../assets/img/psiquico.png';
    }
    else if (tipo === 'rock') {
      return '../../assets/img/pedra.png';
    }
    else if (tipo === 'ghost') {
      return '../../assets/img/fantasma.png';
    }
    else if (tipo === 'ice') {
      return '../../assets/img/gelo.png';
    }
    else if (tipo === 'dragon') {
      return '../../assets/img/dragao.png';
    }
    else if (tipo === 'dark') {
      return '../../assets/img/sombrio.png';
    }
    else if (tipo === 'steel') {
      return '../../assets/img/metal.png';
    }
    else if (tipo === 'flying') {
      return '../../assets/img/voador.png';
    }
    else {
      return '../../assets/img/pokemon.png';
    }

  }

  getTipoClass(tipo: string): string {
    // Mapeamento de tipos para classes CSS
    switch (tipo) {
      case 'water':
        return 'tipo-agua';
      case 'fire':
        return 'tipo-fogo';
      case 'grass':
        return 'tipo-planta';
      case 'bug':
        return 'tipo-inseto';
      case 'electric':
        return 'tipo-eletrico';
      case 'poison':
        return 'tipo-veneno';
      case 'ground':
        return 'tipo-terra';
      case 'fairy':
        return 'tipo-fada';
      case 'fighting':
        return 'tipo-lutador';
      case 'psychic':
        return 'tipo-psiquico';
      default:
        return 'tipo-eletrico';
    }
  }
}
