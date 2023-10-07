import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private authToken = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any[]> {
    // Defina o cabeçalho da solicitação com o token de autenticação
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    // Fazer uma solicitação GET para obter a lista de pokémons do backend com o cabeçalho de autenticação
    return this.http.get<any[]>(`${this.apiUrl}/pokemons?page=1&per_page=5`, { headers });
  }
}
