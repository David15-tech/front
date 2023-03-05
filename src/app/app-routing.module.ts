import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'suma',component:OperacionesComponent},
  {path:'resta',component:OperacionesComponent},
  {path:'multiplicacion',component:OperacionesComponent},
  {path:'division',component:OperacionesComponent},
  {path:'potencia',component:OperacionesComponent},
  {path:'raiz-cuadrada',component:OperacionesComponent},
  {path:'resultado',component:ResultadoComponent},
  {path:'**',component:HomeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
