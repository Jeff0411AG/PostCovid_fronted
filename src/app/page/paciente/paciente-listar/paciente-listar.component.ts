import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from '../../../model/paciente';
import { PacienteService } from '../../../service/paciente.service';
import { PacienteDialogoComponent } from './paciente-dialogo/paciente-dialogo.component';

@Component({
  selector: 'app-paciente-listar',
  templateUrl: './paciente-listar.component.html',
  styleUrls: ['./paciente-listar.component.css']
})
export class PacienteListarComponent implements OnInit {

  lista: Paciente[] = [];
  dataSource: MatTableDataSource<Paciente> = new MatTableDataSource();
  displayedColumns: string[] = ['idPaciente', 'namePaciente', 'lastNamePaciente','birthday','numberPhone','numhistoria','diagnostico','version','acciones'];
  private idMayor: number = 0;
  constructor(private pacienteService: PacienteService,
    private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.pacienteService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this.pacienteService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.pacienteService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PacienteDialogoComponent);
  }
  eliminar(id: number) {
    this.pacienteService.eliminar(id).subscribe(() => {
      this.pacienteService.listar().subscribe(data => {
        this.pacienteService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
