import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';
import { ConsultaDialogoComponent } from './consulta-dialogo/consulta-dialogo.component';

@Component({
  selector: 'app-consulta-listar',
  templateUrl: './consulta-listar.component.html',
  styleUrls: ['./consulta-listar.component.css']
})
export class ConsultaListarComponent implements OnInit {

  lista: Consulta[]=[];
  dataSource: MatTableDataSource<Consulta> = new MatTableDataSource();
  displayedColumns:string[]= ['idConsulta', 'fechaConsulta', 'diagnositco', 'observacion','doctor','paciente', 'acciones']
  private idMayor:number = 0;

  constructor(private consultaService: ConsultaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.consultaService.listar().subscribe(data =>{
      this.lista=data;
      this.dataSource = new MatTableDataSource(data);
    });

    this.consultaService.getLista().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })


  }

  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(ConsultaDialogoComponent);
  }

  eliminar(id:number){
    
  }




}
