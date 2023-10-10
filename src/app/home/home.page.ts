import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importe o NavController


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;

  constructor(private navCtrl: NavController) {
    const usuarioJson = localStorage.getItem('user'); // Recupere o JSON do usuário
    if (usuarioJson) {
      this.user = JSON.parse(usuarioJson); // Converta o JSON de volta para um objeto
    }
  }

  ngOnInit() {
  }

  irParaTelaLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
