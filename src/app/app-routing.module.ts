import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//doctor
import { DoctorEditarComponent } from './page/doctor/doctor-editar/doctor-editar.component';
import { DoctorComponent } from './page/doctor/doctor.component';


//pregunta
import { PreguntaEditarComponent } from './page/pregunta/pregunta-editar/pregunta-editar.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';

const routes: Routes = [
  {
    path: 'doctor', component: DoctorComponent, children: [
        { path: 'nuevo', component: DoctorEditarComponent },
        { path: 'edicion/:id', component: DoctorEditarComponent }
    ]
  },
  
  {
    path:'pregunta', component: PreguntaComponent, children:[
        {path:'nuevo', component:PreguntaEditarComponent},
        {path:'edicion/:id', component:PreguntaEditarComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
