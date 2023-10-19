import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private authToken = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getPokemons(page: number): Observable<any[]> {
    const apiPokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`;

    return this.http.get<any[]>(apiPokeUrl).pipe(
      map((response: any) => {
        const pokemons = response.results.map((pokemon: any) => {
          return {
            id: this.getPokemonIdFromUrl(pokemon.url),
            name: pokemon.name,
            url: pokemon.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonIdFromUrl(pokemon.url)}.png`
          };
        });
        return pokemons;
      })
    );


  }

  getPokemonIdFromUrl(url: string): number {
    // Extrai o ID do URL da PokeAPI
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  getPokemonByName(name: string) {
    return this.http.get(`${this.baseUrl}${name}`);
  }

  obterMeusPokemons(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });


    return this.http.get<any[]>(`${this.apiUrl}/my-favorites`, { headers });
  }

}
