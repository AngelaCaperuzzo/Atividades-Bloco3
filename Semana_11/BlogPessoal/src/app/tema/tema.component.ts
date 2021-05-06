import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]  

  constructor(

    private router: Router,
    private temaService: TemaService

  ) { }

  ngOnInit(){

    if(environment.token == ''){
      alert('Ops, sua seção expirou... Por favor faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Seu tema foi cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema() //zera meu tema permitindo cadastrar outro sem necessidade e apagar manualmente
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

}
