import { PacienteMensajeComponent } from './paciente-mensaje/paciente-mensaje.component';
import { MatTableDataSource } from '@angular/material/table';
import { PacienteService } from './../../../service/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/model/paciente';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-paciente-listar',
  templateUrl: './paciente-listar.component.html',
  styleUrls: ['./paciente-listar.component.css']
})
export class PacienteListarComponent implements OnInit {
dataSource:MatTableDataSource<Paciente> = new MatTableDataSource();
displayedColumns:string[]=['id','Nombre','Apellido','FechaNacimiento','Telefono','NumHistoria','Diagnostico','Version','accion1','accion2']
private idMayor: number = 0;
  constructor(private ps:PacienteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
}
    
    confirmar(id: number) {
      this.idMayor = id;
       this.dialog.open(PacienteMensajeComponent);
    }
  
  
    eliminar(id: number) {
      this.ps.eliminar(id).subscribe(() => {
        this.ps.listar().subscribe(data => {
          this.ps.setLista(data);/* se ejecuta la línea 27*/
        });
      });
  
    }
  

}
