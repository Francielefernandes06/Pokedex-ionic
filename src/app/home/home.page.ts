import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importe o NavController
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
  searchTerm: string | undefined;
  users: any[] | undefined;

  constructor(private navCtrl: NavController, private http: HttpClient) {
    const usuarioJson = localStorage.getItem('user'); // Recupere o JSON do usuário
    if (usuarioJson) {
      this.user = JSON.parse(usuarioJson); // Converta o JSON de volta para um objeto
    }
  }

  ngOnInit() {
  }

  searchUsers() {

    const token = localStorage.getItem('token'); 

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.get(`http://127.0.0.1:8000/api/user-by-name?name=${this.searchTerm}`, { headers: headers }).subscribe((data: any) => {
      this.users = data;
    });
  }

  viewPokemonDetails(user: any) {
    console.log('Dados do usuário:', user);


  this.navCtrl.navigateForward('/pokemon-details-user', { state: { user } });
  }

  irParaTelaLogin() {
    this.navCtrl.navigateForward('/login');
  }

}
