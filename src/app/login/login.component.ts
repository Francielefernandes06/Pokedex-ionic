import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  email: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  login() {
    // Construa o objeto de dados para a solicitação POST
    const dados = {
      email: this.email,
      password: this.senha,
    };

    console.log(dados)

    // Substitua a URL pela sua API de autenticação
    const apiUrl = 'http://127.0.0.1:8000/api/login';
    console.log(apiUrl)

    // Faça a solicitação POST para a API
    this.http.post(apiUrl, dados).subscribe(
      (resposta: any) => {
        // Verifique a resposta da API e tome ações com base nela
        if (resposta && resposta.access_token) {
          // O login foi bem-sucedido, você pode armazenar o token de autenticação e redirecionar para outra página
          // Exemplo de armazenamento de token em localStorage:
          localStorage.setItem('token', resposta.access_token);

          localStorage.setItem('user', JSON.stringify(resposta.user)); // Armazene o objeto como uma string JSON

          console.log(resposta);

          // Redirecione para a página desejada (por exemplo, a página inicial)
          this.navCtrl.navigateRoot('/');
        } else {
          // O login falhou, exiba uma mensagem de erro para o usuário
          console.error('Login falhou. Mensagem de erro:', resposta.error);
        }
      },
      (erro) => {
        // Trate erros de solicitação, como problemas de rede
        console.error('Erro ao fazer login:', erro);
      }
    );
  }

  ngOnInit() {}

}
