import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';


@Component({
  selector: 'app-doctor-buscar',
  templateUrl: './doctor-buscar.component.html',
  styleUrls: ['./doctor-buscar.component.css']
})
export class DoctorBuscarComponent implements OnInit {
  textoBuscar: string = ""

  
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {/* buscar a BD */
    this.doctorService.buscar(e.target.value).subscribe(data=>{
      this.doctorService.setLista(data);
    });
  }

}
