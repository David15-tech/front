import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Calculadora } from "../models/calculadora";
import { Global } from "./global";
import { Observable } from 'rxjs';


@Injectable()
export class CalculadoraService{
    public url:string;
    constructor(
        public _http:HttpClient
    ){
        this.url=Global.url;
    }
    //SUMA
    //http://localhost:3700/suma
    getSuma(num1:Number, num2:Number):Observable<any>{
        let body = {num1: num1, num2: num2};
        let params=JSON.stringify(body);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'suma',params,{headers:headers});
    }
    //RESTA
    //http://localhost:3700/resta
    getResta(num1:Number, num2:Number):Observable<any>{
        let body = {num1: num1, num2: num2};
        let params=JSON.stringify(body);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'resta',params,{headers:headers});
    }

    //MULTIPLICACION
    //http://localhost:3700/multiplicacion
    getMulti(num1:Number, num2:Number):Observable<any>{
        let body = {num1: num1, num2: num2};
        let params=JSON.stringify(body);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'multiplicacion',params,{headers:headers});
    }

    //POTENCIA
    //http://localhost:3700/potencia
    getPotencia(num1:Number, num2:Number):Observable<any>{
        let body = {num1: num1, num2: num2};
        let params=JSON.stringify(body);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'potencia',params,{headers:headers});
    }
    //RAIZ
    //http://localhost:3700/raiz-cuadrada
    getRaiz(num1:Number, num2:Number):Observable<any>{
        let body = {num1: num1, num2: num2};
        let params=JSON.stringify(body);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'raiz-cuadrada',params,{headers:headers});
    }

    //DIVISION
    //http://localhost:3700/division
    getDivision(num1:Number, num2:Number):Observable<any>{
        let body = {num1: num1, num2: num2};
        let params=JSON.stringify(body);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'division',params,{headers:headers});
    }

    getResultado():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'resultado',{headers:headers});
    }

    


}