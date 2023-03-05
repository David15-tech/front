import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.services';
import { Calculadora } from 'src/app/models/calculadora';
import { CargarService } from 'src/app/services/cargar.services';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router  } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
  providers:[CalculadoraService,CargarService]
})
export class ResultadoComponent {


  public resultado: Number;
  public url: string;
  constructor(
    public _router: Router, 
    private _calculadoraServices: CalculadoraService
  ){
    this.url = Global.url;
    this.resultado= 0;
  }

  ngOnInit() {
    this.calcResultado();
  }
  calcResultado(){
    this._calculadoraServices.getResultado().subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        console.log(this.resultado);
      },
      error => {
        console.log(error);
      }
    );
  }
}
