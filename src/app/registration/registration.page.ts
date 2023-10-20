
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';


  constructor(private authService: AuthService, private navCtrl: NavController, private toastController: ToastController) { }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duração em milissegundos
      position: 'bottom' // Posição do toast na tela
    });
    toast.present();
  }
  registerUser() {

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    };
    if (userData.password !== userData.password_confirmation) {
      // Senha e confirmação de senha não coincidem, exiba uma mensagem de erro
      console.error('As senhas não coincidem');
      // Você pode exibir uma mensagem de erro ao usuário aqui
      return;
    }
    this.authService.registerUser(userData).subscribe(
      response => {
        if (response && response.token) {

          localStorage.setItem('token', response.token);

          localStorage.setItem('user', JSON.stringify(response.user));

          console.log(response);

          this.navCtrl.navigateRoot('/');
        } else {
          this.presentToast('Email ou senha incorretos');

          console.error('Login falhou. Mensagem de erro:', response.error);
        }
      },
      error => {
        // Lógica de tratamento de erro, exiba mensagens de erro ou feedback ao usuário
        console.error('Erro durante o registro', error);
      }
    );
  }

  goToLogin() {
    
    this.navCtrl.navigateForward('/login'); 
  }
  ngOnInit() { }

}

