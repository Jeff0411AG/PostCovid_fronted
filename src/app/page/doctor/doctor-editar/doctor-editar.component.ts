import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';


@Component({
  selector: 'app-doctor-editar',
  templateUrl: './doctor-editar.component.html',
  styleUrls: ['./doctor-editar.component.css']
})
export class DoctorEditarComponent implements OnInit {

  doctor: Doctor = new Doctor();
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";
  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });



  }
  aceptar() {
    if (this.doctor.nameDoctor.length>0 && this.doctor.emailDoctor.length>0) {
      if (this.edicion) {
        this.doctorService.modificar(this.doctor).subscribe(() => {
          this.doctorService.listar().subscribe(data => {
            this.doctorService.setLista(data);
          });
        });

      } else {

        this.doctorService.insertar(this.doctor).subscribe(() => {
          this.doctorService.listar().subscribe(data => {
            this.doctorService.setLista(data);
          });
        });
      }
      this.router.navigate(['doctor']);
    } else {
      this.mensaje="Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.doctorService.listarId(this.id).subscribe(data => {
        this.doctor = data
        console.log(data);
      });

    }

  }

}
