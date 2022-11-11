import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../model/paciente';
import { PacienteService } from '../../../service/paciente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styleUrls: ['./paciente-editar.component.css']
})
export class PacienteEditarComponent implements OnInit {

  paciente: Paciente = new Paciente();
  id: number = 0;
  edicion: boolean = false;
  //listaPacientes: Paciente[] = [];//this.paciente.birthday = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');
  //idPacienteSeleccionado: number = 0;
 // fechaSeleccionada: Date = moment().add(-1, 'days').toDate();
  mensaje: string = "";
 // maxFecha: Date = moment().add(-1, 'days').toDate();
  //mensaje1: string = "";
  constructor(private pacienteService: PacienteService,private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
  
  
  
    }
    aceptar() {
      if (this.paciente.diagnostico.length>0 ) {

        //this.paciente.birthday = moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss');

        if (this.edicion) { 
          this.pacienteService.modificar(this.paciente).subscribe(() => {
            this.pacienteService.listar().subscribe(data => {
              this.pacienteService.setLista(data);
            });
          });
  
        } else {
  
          this.pacienteService.insertar(this.paciente).subscribe(() => {
            this.pacienteService.listar().subscribe(data => {
              this.pacienteService.setLista(data);
            });
          });
        }
        this.router.navigate(['paciente']);
      } else {
        this.mensaje="Complete los valores requeridos";
      }
    }
    
    init() {
      if (this.edicion) {
        this.pacienteService.listarId(this.id).subscribe(data => {
          this.paciente = data
          console.log(data);
        });
  
      }
  
    }


 
  }
