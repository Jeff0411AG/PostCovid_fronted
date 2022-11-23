import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from './../../../model/paciente';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-dominio',
  templateUrl: './paciente-dominio.component.html',
  styleUrls: ['./paciente-dominio.component.css']
})
export class PacienteDominioComponent implements OnInit {
  dataSource: MatTableDataSource<Paciente> = new MatTableDataSource();
  dataSource2: MatTableDataSource<Paciente> = new MatTableDataSource();
  displayedColumns: string[] = ['idPaciente', 'namePaciente', 'lastNamePaciente','birthday','numberPhone','numhistoria','diagnostico','version'];

  constructor(private pS: PacienteService) { }

  ngOnInit(): void {

    this.pS.dominio().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      });
    this.pS.dominio2().subscribe(data=>{
      this.dataSource2 = new MatTableDataSource(data);
      })
    }
    
  }

