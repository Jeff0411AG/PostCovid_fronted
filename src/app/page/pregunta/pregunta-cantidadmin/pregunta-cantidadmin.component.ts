import { PreguntaService } from 'src/app/service/pregunta.service';
import { CantidadPreguntas } from './../../../model/cantidadpreguntas';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta-cantidadmin',
  templateUrl: './pregunta-cantidadmin.component.html',
  styleUrls: ['./pregunta-cantidadmin.component.css']
})
export class PreguntaCantidadminComponent implements OnInit {

  dataSource:MatTableDataSource<CantidadPreguntas> =new MatTableDataSource();
 
  displayedColumns:String[] = ['iddoctor','nombredoctor','apellidodoctor','cantidad'];

  constructor(private pS: PreguntaService) { }

  ngOnInit(): void {
    this.pS.doctoresconmenospreguntas().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

  }

}
