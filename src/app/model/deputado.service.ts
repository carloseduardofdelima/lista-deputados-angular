import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = "https://dadosabertos.camara.leg.br/api/v2/";
  }

  obterDeputados(nome: string): Observable<any> {
    return this.http.get(`${this.URL}/deputados?nome=${nome}&ordem=ASC&ordenarPor=nome`);

  }
}
