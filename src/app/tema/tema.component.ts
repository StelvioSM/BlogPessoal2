import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../Model/tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {

    if(environment.token ==""){
      alert("Sua seção expirou, faça o Login novamente.")
      this.router.navigate(["/entrar"])
    }

    this.findAllTemas()
  }



  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=>{
      this.listaTemas = resp 

    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = rep 
      alert("Tema Cadastrado com Sucesso!")
      this.findAllTemas()
      this.tema = new Tema()
    })

  }
}

