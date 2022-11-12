import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//doctor
import { DoctorEditarComponent } from './page/doctor/doctor-editar/doctor-editar.component';
import { DoctorComponent } from './page/doctor/doctor.component';
//paciente
import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteEditarComponent } from './page/paciente/paciente-editar/paciente-editar.component';
//pregunta
import { PreguntaEditarComponent } from './page/pregunta/pregunta-editar/pregunta-editar.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
//tarjeta
import { TarjetaEditarComponent } from './page/tarjeta/tarjeta-editar/tarjeta-editar.component';
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';

const routes: Routes = [
  {
    path: 'doctor', component: DoctorComponent, children: [
        { path: 'nuevo', component: DoctorEditarComponent },
        { path: 'edicion/:id', component: DoctorEditarComponent }
    ]
},
{
  path: 'paciente', component: PacienteComponent, children: [
      { path: 'nuevo', component: PacienteEditarComponent },
      { path: 'edicion/:id', component: PacienteEditarComponent }
  ]
},
{
  path:'pregunta', component: PreguntaComponent, children:[
      {path:'nuevo', component:PreguntaEditarComponent},
      {path:'edicion/:id', component:PreguntaEditarComponent}
  ]
},
{
  path:'tarjeta', component: TarjetaComponent, children:[
      {path:'nuevo', component:TarjetaEditarComponent},
      {path:'edicion/:id', component:TarjetaEditarComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
