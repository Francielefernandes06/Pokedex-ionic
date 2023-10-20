import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ModalController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-my-pokemons',
  templateUrl: './my-pokemons.page.html',
  styleUrls: ['./my-pokemons.page.scss'],
})
export class MyPokemonsPage implements OnInit {

  meusPokemons: any[] = []; 

  constructor(private pokemonService: PokemonService, private modalController: ModalController, private userService: UserService, private http: HttpClient,) { }

  ngOnInit() {
    this.pokemonService.obterMeusPokemons().subscribe((data) => {
      this.meusPokemons = data; 
    });
  }

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

  deletarPokemon(pokemonId: number) {
    const apiUrl = `http://127.0.0.1:8000/api/favorites`;

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token de autenticação não encontrado no localStorage');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    this.http.delete(`${apiUrl}/${pokemonId}`, { headers }).subscribe(
      (resposta: any) => {
        if (resposta) {

          this.userService.getUserInfo().subscribe(
            (userInfo) => {
              localStorage.setItem('user', JSON.stringify(userInfo));
              console.log('Informações do usuário:', userInfo);


            },
            (error) => {
              console.error('Erro ao obter informações do usuário:', error);



            }
          );

          this.ngOnInit();
        }
      }
    );
  }

  setResult(ev: any, pokemonId: number) {
    const role = ev.detail.role;
    if (role === 'confirm') {
      this.deletarPokemon(pokemonId);
    }
  }

}
