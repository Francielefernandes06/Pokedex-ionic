import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private authToken = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getPokemonDetailsById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get<any>(`${this.apiUrl}/pokemons/details/${id}`, { headers });
  }
}
