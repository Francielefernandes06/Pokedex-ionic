import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-details-user',
  templateUrl: './pokemon-details-user.page.html',
  styleUrls: ['./pokemon-details-user.page.scss'],
})
export class PokemonDetailsUserPage implements OnInit {
  user: any; // Declare a variável para armazenar os favoritos

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state){
      this.user = navigation.extras.state['user'];
      console.log('Dados do usuário na outra página:', this.user);
    }
    // if (favoritesString) {
    //   try {
    //     this.favorites = JSON.parse(favoritesString);
    //   } catch (error) {
    //     console.error('Erro ao analisar dados de favoritos: ', error);
    //   }
    // }
  }

  ngOnInit() {
  }

  returnPokemons(){
    this.router.navigate(['']);
  }

}
