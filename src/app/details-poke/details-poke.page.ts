import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailsService } from '../pokemon-details.service';
import { Router } from '@angular/router'; // Importe o Router do Angular
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';



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
    private pokemonDetailsService: PokemonDetailsService,
    private router: Router,
    private http: HttpClient,
    private navCtrl: NavController
  ) { }


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

  favoritarPokemon(pokemonId: number) {
    // Aqui você pode fazer uma chamada ao backend para favoritar o Pokémon
    // e depois redirecionar para a tela de listagem

    // Exemplo de chamada ao backend (usando HttpClient, por exemplo)
    const apiUrl = 'http://127.0.0.1:8000/api/favorites';
    console.log(apiUrl)
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token de autenticação não encontrado no localStorage');
      return; // Ou trate a ausência do token de acordo com a lógica do seu aplicativo
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Substitua 'Bearer' pelo tipo de autenticação que sua API espera
    });


    // Faça a solicitação POST para a API
    this.http.post(apiUrl,  { pokemon_id: pokemonId }, { headers }).subscribe(
      (resposta: any) => {
        if (resposta ) {


          console.log(resposta);

          this.router.navigate(['/tabs/tab3'], { state: { message: resposta.message } });
        } else {
          console.error('Requisição falhou. Mensagem de erro:', resposta.error);
        }
      },
      (erro) => {
        // Trate erros de solicitação, como problemas de rede
        console.error('Erro ao fazer requisição:', erro);
      }
    );



  }

  setResult(ev: any) {
    const role = ev.detail.role;
    if (role === 'confirm') {
      // Se o usuário confirmar, chame a função favoritarPokemon com o ID do Pokémon
      this.favoritarPokemon(this.pokemonId);
    }
  }




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
