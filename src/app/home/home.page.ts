import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importe o NavController


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  
  irParaTelaLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
