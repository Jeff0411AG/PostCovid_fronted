import { CantidadConsulta } from './../../../model/cantidadconsulta';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-consulta-cantidadconsulta',
  templateUrl: './consulta-cantidadconsulta.component.html',
  styleUrls: ['./consulta-cantidadconsulta.component.css']
})
export class ConsultaCantidadconsultaComponent implements OnInit {

  dataSource: MatTableDataSource<CantidadConsulta> = new MatTableDataSource();
  displayedColumns:string[]= ['doctor', 'cantidad']

  constructor(private cS: ConsultaService) { }

  ngOnInit(): void {
    this.cS.buscarCantidadconsutla().subscribe(data =>{
      this.dataSource =new MatTableDataSource(data);
    })
  }

}
