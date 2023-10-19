import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userData: any;

  constructor() {
   const userDataJSON = localStorage.getItem('user');
    if (userDataJSON) {
      this.userData = JSON.parse(userDataJSON);
    } else {
      this.userData = {}; // Inicialize userData como um objeto vazio
    }
  }



  async logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    //retorne para tela de lgin
    window.location.href = '/login';
  }

  ngOnInit() {
  }

}
