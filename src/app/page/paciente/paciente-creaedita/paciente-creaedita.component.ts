import { PacienteService } from './../../../service/paciente.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-paciente-creaedita',
  templateUrl: './paciente-creaedita.component.html',
  styleUrls: ['./paciente-creaedita.component.css']
})
export class PacienteCreaeditaComponent implements OnInit {
  paciente: Paciente = new Paciente();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private pacienteService: PacienteService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.paciente.namePaciente.length > 0 && this.paciente.lastNamePaciente.length > 0) {
        if (this.edicion){
          this.pacienteService.modificar(this.paciente).subscribe(data => {
            this.pacienteService.listar().subscribe(data => {
              this.pacienteService.setLista(data);
            })
          })
        }
    else 
    {
      this.pacienteService.insertar(this.paciente).subscribe(data => {
        this.pacienteService.listar().subscribe(data => {
          this.pacienteService.setLista(data);
        })
      })}
      this.router.navigate(['pacientes']);
    
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.pacienteService.listarId(this.id).subscribe(data => {
        this.paciente = data;
      })
    }

  }

}
