import { ConsultaEditarComponent } from './page/consulta/consulta-editar/consulta-editar.component';
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
import { ConsultaComponent } from './page/consulta/consulta.component';
import { EncuestaComponent } from './page/encuesta/encuesta.component';
import { EncuestaEditarComponent } from './page/encuesta/encuesta-editar/encuesta-editar.component';

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
  path:'consulta', component: ConsultaComponent, children:[
      {path: 'nuevo', component: ConsultaEditarComponent},
      {path: 'edicion/:id', component: ConsultaEditarComponent}
  ]
},
{
  path:'encuesta', component: EncuestaComponent, children:[
      {path: 'nuevo', component: EncuestaEditarComponent},
      {path: 'edicion/:id', component: EncuestaEditarComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
