import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Encuesta } from '../../../model/encuesta';
import { Paciente } from '../../../model/paciente';
import { EncuestaService } from '../../../service/encuesta.service';
import { PacienteService } from '../../../service/paciente.service';
import * as moment from 'moment';

@Component({
  selector: 'app-encuesta-editar',
  templateUrl: './encuesta-editar.component.html',
  styleUrls: ['./encuesta-editar.component.css']
})
export class EncuestaEditarComponent implements OnInit {
  
  encuesta: Encuesta = new Encuesta();
  id: number = 0;
  edicion: boolean = false;
  listaPacientes: Paciente[] = [];
  idPacienteSeleccionado: number = 0;
  fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = "";
  constructor(private encuestaService: EncuestaService,
    private route: ActivatedRoute,
    private router: Router, private pacienteService: PacienteService) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.pacienteService.listar().subscribe(data => { this.listaPacientes = data });
  }
  aceptar() {
    if (this.encuesta.anotaciones.length > 0 &&
      this.idPacienteSeleccionado>0) {
      let p = new Paciente();
      p.idPaciente = this.idPacienteSeleccionado;
      this.encuesta.paciente = p;
      this.encuesta.fechaEncuesta = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
      if (this.edicion) {
        this.encuestaService.modificar(this.encuesta).subscribe(() => {
          this.encuestaService.listar().subscribe(data => {
            this.encuestaService.setLista(data);
          });
        });

      } else {
        this.encuestaService.insertar(this.encuesta).subscribe(() => {
          this.encuestaService.listar().subscribe(data => {
            this.encuestaService.setLista(data);
          });
        }, err => {
          //this.mensaje=err
          console.log(err);
        });
      }
      this.router.navigate(['encuesta']);

    }
    else {
      this.mensaje1 = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.encuestaService.listarId(this.id).subscribe(data => {
        this.encuesta = data
        console.log(data);
        this.idPacienteSeleccionado = data.paciente.idPaciente;
      });

    }

  }
}
