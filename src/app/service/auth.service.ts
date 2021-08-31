import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { userLogin } from '../Model/userLogin';
import { usuario } from '../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar (userLogin: userLogin): Observable<userLogin>{
  return this.http.put<userLogin>('https://stelviosmith.herokuapp.com/api/v1/usuario/autenticar',userLogin)

  }

  cadastrar (user: usuario): Observable<usuario> {
    return this.http.post<usuario>('https://stelviosmith.herokuapp.com/api/v1/usuario/salvar',user)

  }
  
  logado(){
    let ok: boolean = false

    if(environment.token != ""){
      ok = true
    }
    
    return ok
  }
}
