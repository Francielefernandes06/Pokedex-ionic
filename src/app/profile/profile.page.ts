import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() {}

  async abrirLinkedIn() {
    // Substitua a URL pelo seu perfil no LinkedIn
    const linkedinUrl = 'https://www.linkedin.com/in/desenvolvedora-franciele-fernandes/';
    this.abrirUrl(linkedinUrl);
  }

  async abrirGitHub() {
    // Substitua a URL pelo seu perfil no GitHub
    const githubUrl = 'https://github.com/Francielefernandes06';
    this.abrirUrl(githubUrl);
  }

  enviarEmail() {
    // Substitua o endereço de e-mail pelo seu endereço de e-mail
    const email = 'francielefernandes126@gmail.com';
    window.open(`mailto:${email}`);
  }

  async abrirInstagram() {
    // Substitua o nome de usuário pelo seu no Instagram
    const instagramUsername = 'franciele_fernandes06';
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;
    this.abrirUrl(instagramUrl);
  }

  async abrirUrl(url: string) {
    await Browser['open']({ url });

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
