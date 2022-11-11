import { Component, OnInit } from '@angular/core';
//import { DoctorService } from 'src/app/service/doctor.service';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-paciente-buscar',
  templateUrl: './paciente-buscar.component.html',
  styleUrls: ['./paciente-buscar.component.css']
})
export class PacienteBuscarComponent implements OnInit {
  textoBuscar: string = ""

  constructor(private pacienteService:PacienteService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
    this.pacienteService.buscar(e.target.value).subscribe(data=>{
      this.pacienteService.setLista(data);
    });
  }

}
