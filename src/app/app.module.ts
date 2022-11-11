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

//Encuesta
import { EncuestaComponent } from './page/encuesta/encuesta.component';

//paciente
import { PacienteComponent } from './page/paciente/paciente.component';
import { PacienteBuscarComponent } from './page/paciente/paciente-buscar/paciente-buscar.component';
import { PacienteEditarComponent } from './page/paciente/paciente-editar/paciente-editar.component';
import { PacienteListarComponent } from './page/paciente/paciente-listar/paciente-listar.component';
import { PacienteDialogoComponent } from './page/paciente/paciente-listar/paciente-dialogo/paciente-dialogo.component';

//Pregunta

//consulta


@NgModule({
  declarations: [
    AppComponent,
    
    //Doctor-Jefferson
    DoctorComponent,
    DoctorListarComponent,
    DoctorEditarComponent,
    DoctorBuscarComponent,
    DoctorDialogoComponent,

    //Encuesta-Jefferson
      EncuestaComponent,
      

      //paciente
      PacienteComponent,
      PacienteBuscarComponent,
      PacienteEditarComponent,
      PacienteListarComponent,
      PacienteDialogoComponent,

    //pregunta

    //consulta
   
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
