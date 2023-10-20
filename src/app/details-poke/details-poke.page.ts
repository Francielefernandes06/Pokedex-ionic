import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailsService } from '../pokemon-details.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';



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
    private navCtrl: NavController,
    private userService: UserService
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

    const apiUrl = 'http://127.0.0.1:8000/api/favorites';
    console.log(apiUrl)
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token de autenticação não encontrado no localStorage');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });



    this.http.post(apiUrl, { pokemon_id: pokemonId }, { headers }).subscribe(
      (resposta: any) => {
        if (resposta) {

          this.userService.getUserInfo().subscribe(
            (userInfo) => {
              localStorage.setItem('user', JSON.stringify(userInfo));
              console.log('Informações do usuário:', userInfo);

              this.navCtrl.navigateForward('/tabs/tab3', { state: { message: resposta.message } });
            },
            (error) => {
              console.error('Erro ao obter informações do usuário:', error);

              this.navCtrl.navigateForward('/tabs/tab3', { state: { message: resposta.message } });
            }
          );
        } else {
          console.error('Requisição falhou. Mensagem de erro:', resposta.error);
        }
      },
      (erro) => {
        console.error('Erro ao fazer requisição:', erro);
      }
    );



  }

  setResult(ev: any) {
    const role = ev.detail.role;
    if (role === 'confirm') {
      this.favoritarPokemon(this.pokemonId);
    }
  }




  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.pokemonId = +idParam;
      this.pokemonDetailsService.getPokemonDetailsById(this.pokemonId).subscribe((data: any) => {
        this.pokemonDetails = data.original;
        console.log(this.pokemonDetails);

      });
    }


  }

  getTipoImage(tipo: string): string {
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
      case 'rock':
        return 'tipo-pedra';
      case 'ghost':
        return 'tipo-fantasma';
      case 'ice':
        return 'tipo-gelo';

      default:
        return 'tipo-eletrico';
    }
  }

  returnPokemons() {
    this.navCtrl.navigateForward('');
  }
}
