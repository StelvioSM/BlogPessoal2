import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { postagem } from '../Model/postagem';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token= {
    hearders: new HttpHeaders().set("Authorization",environment.token)

  }
   getAllPostagens(): Observable<postagem[]>{
     return this.http.get<postagem[]>("httpa://localhost:8080/postagens,"
     this.token)

   }
   postPostagem(postagem: postagem):Observable<postagem>{
     return this.http.post<postagem>("httpa://localhost:8080/postagens,postagem"
     this.token)
   }
}
