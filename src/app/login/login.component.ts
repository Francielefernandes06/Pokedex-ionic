import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private navCtrl: NavController, private toastController: ToastController) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom' 
    });
    toast.present();
  }

  login() {
  
    const dados = {
      email: this.email,
      password: this.senha,
    };

    console.log(dados)

    const apiUrl = 'http://127.0.0.1:8000/api/login';
    console.log(apiUrl)


    this.http.post(apiUrl, dados).subscribe(
      (resposta: any) => {

        if (resposta && resposta.access_token) {

          localStorage.setItem('token', resposta.access_token);

          localStorage.setItem('user', JSON.stringify(resposta.user));

          console.log(resposta);

          this.navCtrl.navigateRoot('/');
        } else {
          this.presentToast('Email ou senha incorretos');

          console.error('Login falhou. Mensagem de erro:', resposta.error);
        }
      },
      (erro) => {
        this.presentToast('Erro ao fazer login');

        console.error('Erro ao fazer login:', erro);
      }
    );
  }

  goToRegistration() {
    
    this.navCtrl.navigateForward('/registration'); 
  }

  ngOnInit() { }

}
