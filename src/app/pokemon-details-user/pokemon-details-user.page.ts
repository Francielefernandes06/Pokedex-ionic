import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-pokemon-details-user',
  templateUrl: './pokemon-details-user.page.html',
  styleUrls: ['./pokemon-details-user.page.scss'],
})
export class PokemonDetailsUserPage implements OnInit {
  user: any; 
  constructor(private router: Router, private navCtrl: NavController) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state){
      this.user = navigation.extras.state['user'];
      console.log('Dados do usuário na outra página:', this.user);
    }
    
  }

  ngOnInit() {
  }

  returnPokemons(){
    this.navCtrl.navigateForward('');
  }

}
