import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from 'src/app/services/calculadora.services';
import { Calculadora } from 'src/app/models/calculadora';
import { CargarService } from 'src/app/services/cargar.services';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router  } from '@angular/router';
@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css'],
  providers:[CalculadoraService,CargarService]
})
export class OperacionesComponent implements OnInit{


  public calcu = new Calculadora ('',0);
  
  public num1: Number;
  public num2: Number;
  public url: string;
  public status: string;
  public resultado: Number;
  public rutaActual: string;


  constructor(
    public _router: Router, 
    private _calculadoraServices: CalculadoraService
  ){
    this.url = Global.url;
    this.num1 = 0;
    this.num2 = 0;
    this.status = "";
    this.resultado = 0;
    this.rutaActual = "";
  }


  ngOnInit() {
  }

  calcSuma(form:NgForm){
    this._calculadoraServices.getSuma(this.num1,this.num2).subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        this.status = "success";
      },
      error => {
        console.log(error);
      }
    );
  }

  calcResta(form:NgForm){
    this._calculadoraServices.getResta(this.num1,this.num2).subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        this.status = "success";
      },
      error => {
        console.log(error);
      }
    );
  }
  calcMulti(form:NgForm){
    this._calculadoraServices.getMulti(this.num1,this.num2).subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        this.status = "success";
      },
      error => {
        console.log(error);
      }
    );
  }
  calcDivision(form:NgForm){
    this._calculadoraServices.getDivision(this.num1,this.num2).subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        this.status = "success";
      },
      error => {
        console.log(error);
      }
    );
  }
  calcPotencia(form:NgForm){
    this._calculadoraServices.getPotencia(this.num1,this.num2).subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        this.status = "success";
      },
      error => {
        console.log(error);
      }
    );
  }
  calcRaiz(form:NgForm){
    this._calculadoraServices.getRaiz(this.num1,this.num2).subscribe(
      response => {
        this.resultado = response.resultado.valorResultado;
        this.status = "success";
      },
      error => {
        console.log(error);
      }
    );
  }



}
