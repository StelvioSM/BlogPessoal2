import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../Model/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token= {
    hearders: new HttpHeaders().set("Authorization",environment.token)

  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("http://localhost:8080//api/v1/tema", this.token )
  }

  posTema(tema:Tema): Observable<Tema>{
    return this.http.post<Tema>("http://localhost:8080//api/v1/tema",tema, this.token)

  }
}
