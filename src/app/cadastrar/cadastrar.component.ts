import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../Model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  usuario: usuario = new usuario
  confirmarSenha: string
  tipousuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  confirmeSenha(event: any){
    this.confirmarSenha = event.target.value

  }

  tipouser(event: any){
    this.tipousuario = event.target.value
  }


  cadastrar(){

    this.usuario.tipo= this.tipousuario
    if(this.usuario.senha != this.confirmarSenha ){

      alert("A senha estão Diferentes")
    } else{

      this.authService.cadastrar(this.usuario).subscribe ((resp:usuario)=>{
        this.usuario = resp
        this.router.navigate(["/entrar"])
        alert("Usuario Cadastrado Com Sucesso!")
      })

    }
  }
}
