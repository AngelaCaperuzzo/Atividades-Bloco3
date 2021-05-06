import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //estou pegando uma lista de temas, então meu observable precisa ter um array
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)

  }

  //estou postando apenas um item do tema, então não coloco o array no tema, post um item or vez
  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)

  }
  

}

//este documento é um service
