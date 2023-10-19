import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private authToken= localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  updateUserInfoInLocalStorage(userInfo: any) {
    if (localStorage) {
      localStorage.setItem('user', JSON.stringify(userInfo));
    }
  }
  getUserInfo(): Observable<any> {
    if (!this.authToken) {
      return new Observable((observer) => {
        observer.error('Token de autenticação não encontrado');
      });
    }

    const headers = {
      Authorization: `Bearer ${this.authToken}`,
    };

    return this.http.get(`${this.apiUrl}/user`, { headers });
  }
}
