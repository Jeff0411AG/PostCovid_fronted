import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//doctor
import { DoctorEditarComponent } from './page/doctor/doctor-editar/doctor-editar.component';
import { DoctorComponent } from './page/doctor/doctor.component';
import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteEditarComponent } from './page/paciente/paciente-editar/paciente-editar.component';

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
}

//agregar path
/*,
{
  path: 'propietarios', component: PropietarioComponent, children: [
      { path: 'nuevo', component: PropietarioEditarComponent },
      { path: 'edicion/:id', component: PropietarioEditarComponent }
  ]
}
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
