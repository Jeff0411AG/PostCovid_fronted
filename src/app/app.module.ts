import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Doctor-Jefferson
import { DoctorComponent } from './page/doctor/doctor.component';
import { DoctorListarComponent } from './page/doctor/doctor-listar/doctor-listar.component';
import { DoctorEditarComponent } from './page/doctor/doctor-editar/doctor-editar.component';
import { DoctorBuscarComponent } from './page/doctor/doctor-buscar/doctor-buscar.component';
import { DoctorDialogoComponent } from './page/doctor/doctor-listar/doctor-dialogo/doctor-dialogo.component';

//paciente
import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteBuscarComponent } from './page/paciente/paciente-buscar/paciente-buscar.component';
import { PacienteEditarComponent } from './page/paciente/paciente-editar/paciente-editar.component';
import { PacienteListarComponent } from './page/paciente/paciente-listar/paciente-listar.component';
import { PacienteDialogoComponent } from './page/paciente/paciente-listar/paciente-dialogo/paciente-dialogo.component';
import { PacienteDominioComponent } from './page/paciente/paciente-dominio/paciente-dominio.component';

//Pregunta
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { PreguntaListarComponent } from './page/pregunta/pregunta-listar/pregunta-listar.component';
import { PreguntaEditarComponent } from './page/pregunta/pregunta-editar/pregunta-editar.component';
import { PreguntaBuscarComponent } from './page/pregunta/pregunta-buscar/pregunta-buscar.component';
import { PreguntaDialogoComponent } from './page/pregunta/pregunta-listar/pregunta-dialogo/pregunta-dialogo.component';

//encuesta
import { EncuestaComponent } from './page/encuesta/encuesta.component';
import { EncuestaListarComponent } from './page/encuesta/encuesta-listar/encuesta-listar.component';
import { EncuestaEditarComponent } from './page/encuesta/encuesta-editar/encuesta-editar.component';
import { EncuestaBuscarComponent } from './page/encuesta/encuesta-buscar/encuesta-buscar.component';
import { EncuestaDialogoComponent } from './page/encuesta/encuesta-listar/encuesta-dialogo/encuesta-dialogo.component';

//Tarjeta
import { TarjetaComponent } from './page/tarjeta/tarjeta.component';
import { TarjetaListarComponent } from './page/tarjeta/tarjeta-listar/tarjeta-listar.component';
import { TarjetaEditarComponent } from './page/tarjeta/tarjeta-editar/tarjeta-editar.component';
import { TarjetaBuscarComponent } from './page/tarjeta/tarjeta-buscar/tarjeta-buscar.component';
import { TarjetaDialogoComponent } from './page/tarjeta/tarjeta-listar/tarjeta-dialogo/tarjeta-dialogo.component';


//consulta
import { ConsultaComponent } from './page/consulta/consulta.component';
import { ConsultaListarComponent } from './page/consulta/consulta-listar/consulta-listar.component';
import { ConsultaDialogoComponent } from './page/consulta/consulta-listar/consulta-dialogo/consulta-dialogo.component';
import { ConsultaEditarComponent } from './page/consulta/consulta-editar/consulta-editar.component';
import { ConsultaBuscarComponent } from './page/consulta/consulta-buscar/consulta-buscar.component';
import { ConsultaCantidadconsultaComponent } from './page/consulta/consulta-cantidadconsulta/consulta-cantidadconsulta.component';
import { ConsultaConsultanoviembreComponent } from './page/consulta/consulta-consultanoviembre/consulta-consultanoviembre.component';
import { PreguntaCantidadComponent } from './page/pregunta/pregunta-cantidad/pregunta-cantidad.component';
import { PreguntaCantidadminComponent } from './page/pregunta/pregunta-cantidadmin/pregunta-cantidadmin.component';
import { EncuestaNoviembreComponent } from './page/encuesta/encuesta-noviembre/encuesta-noviembre.component';
import { EncuestaCantidadComponent } from './page/encuesta/encuesta-cantidad/encuesta-cantidad.component';



@NgModule({
  declarations: [
    AppComponent,
    
    //Doctor
    DoctorComponent,
    DoctorListarComponent,
    DoctorEditarComponent,
    DoctorBuscarComponent,
    DoctorDialogoComponent,

    //paciente
    PacienteComponent,
    PacienteBuscarComponent,
    PacienteEditarComponent,
    PacienteListarComponent,
    PacienteDialogoComponent,
    PacienteDominioComponent,


    //pregunta
    PreguntaComponent,
    PreguntaListarComponent,
    PreguntaEditarComponent,
    PreguntaBuscarComponent,
    PreguntaDialogoComponent,


    //encuesta
    EncuestaComponent,
    EncuestaListarComponent,
    EncuestaEditarComponent,
    EncuestaBuscarComponent,
    EncuestaDialogoComponent,
   
    ///consulta
    ConsultaComponent,
    ConsultaListarComponent,
    ConsultaDialogoComponent,
    ConsultaEditarComponent,
    ConsultaBuscarComponent,

     //tarjeta
     TarjetaComponent,
     TarjetaListarComponent,
     TarjetaEditarComponent,
     TarjetaBuscarComponent,
     TarjetaDialogoComponent,
     ConsultaCantidadconsultaComponent,
     ConsultaConsultanoviembreComponent,
     PreguntaCantidadComponent,
     PreguntaCantidadminComponent,
     EncuestaNoviembreComponent,
     EncuestaCantidadComponent,
   

    
  


   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule
    
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
{provide: DateAdapter, useClass: CustomDateAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
