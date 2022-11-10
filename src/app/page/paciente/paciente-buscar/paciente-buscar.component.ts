import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-paciente-buscar',
  templateUrl: './paciente-buscar.component.html',
  styleUrls: ['./paciente-buscar.component.css']
})
export class PacienteBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array: Paciente[] = [];
    this.pacienteService.listar().subscribe(data => {
      data.forEach((element, index) => {
        if (element.namePaciente.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.pacienteService.setLista(array);
    })
  }

}
