import { CantidadPreguntas } from './../../../model/cantidadpreguntas';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-pregunta-cantidad',
  templateUrl: './pregunta-cantidad.component.html',
  styleUrls: ['./pregunta-cantidad.component.css']
})
export class PreguntaCantidadComponent implements OnInit {

  dataSource:MatTableDataSource<CantidadPreguntas> =new MatTableDataSource();
 
  displayedColumns:String[] = ['iddoctor','nombredoctor','apellidodoctor','cantidad'];

  constructor(private pS:PreguntaService) { }

  ngOnInit(): void {
    this.pS.catidadpreguntas().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
