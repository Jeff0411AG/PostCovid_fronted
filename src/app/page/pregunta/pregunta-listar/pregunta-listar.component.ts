import { PreguntaService } from './../../../service/pregunta.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pregunta } from 'src/app/model/pregunta';
import { MatDialog } from '@angular/material/dialog';
import { PreguntaDialogoComponent } from './pregunta-dialogo/pregunta-dialogo.component';

@Component({
  selector: 'app-pregunta-listar',
  templateUrl: './pregunta-listar.component.html',
  styleUrls: ['./pregunta-listar.component.css']
})
export class PreguntaListarComponent implements OnInit {

  lista: Pregunta[] = [];
  dataSource:MatTableDataSource<Pregunta> =new MatTableDataSource();
  ///añadimos el manyToOne
  displayedColumns:String[] = ['idPregunta','descripcion','respuesta','doctor','acciones'];

  private idMayor: number= 0;

  constructor(private preguntaService:PreguntaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.preguntaService.listar().subscribe(data =>{
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    });

    this.preguntaService.getLista().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
      console.log(data); //el console solo se pone en manytoOne

    });

    this.preguntaService.getConfirmaEliminacion().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor):false;

    });

  

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(PreguntaDialogoComponent);
  }

  eliminar(id:number){
    this.preguntaService.eliminar(id).subscribe(() =>{
      this.preguntaService.listar().subscribe(data =>{
        this.preguntaService.setLista(data);
      })
    });
  }

  ////
  filtrar(e:any){
    this.dataSource.filter= e.target.value.trim();
  }




}
