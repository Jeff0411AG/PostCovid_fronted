//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from 'src/app/model/doctor';
import { DoctorDialogoComponent } from './doctor-dialogo/doctor-dialogo.component';
import { DoctorService } from 'src/app/service/doctor.service';


@Component({
  selector: 'app-doctor-listar',
  templateUrl: './doctor-listar.component.html',
  styleUrls: ['./doctor-listar.component.css']
})
export class DoctorListarComponent implements OnInit {

  lista: Doctor[] = [];
  dataSource: MatTableDataSource<Doctor> = new MatTableDataSource();
  displayedColumns: string[] = ['idDoctor', 'nameDoctor', 'lastNameDoctor','numberPhone','emailDoctor','acciones'];
  private idMayor: number = 0;
  constructor(private doctorService: DoctorService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.doctorService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this.doctorService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.doctorService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DoctorDialogoComponent);
  }
  eliminar(id: number) {
    this.doctorService.eliminar(id).subscribe(() => {
      this.doctorService.listar().subscribe(data => {
        this.doctorService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
