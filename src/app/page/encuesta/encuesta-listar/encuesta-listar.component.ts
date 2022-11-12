import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Encuesta } from '../../../model/encuesta';
import { EncuestaService } from '../../../service/encuesta.service';
import { EncuestaDialogoComponent } from './encuesta-dialogo/encuesta-dialogo.component';

@Component({
  selector: 'app-encuesta-listar',
  templateUrl: './encuesta-listar.component.html',
  styleUrls: ['./encuesta-listar.component.css']
})
export class EncuestaListarComponent implements OnInit {

  

  lista: Encuesta[] = [];
  dataSource:MatTableDataSource<Encuesta> =new MatTableDataSource();
  ///añadimos el manyToOne
  displayedColumns:String[] = ['idEncuesta','fechaEncuesta','paciente','anotaciones','acciones'];

  private idMayor: number= 0;

  constructor(private encuestaService:EncuestaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.encuestaService.listar().subscribe(data =>{
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    });

    this.encuestaService.getLista().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
      console.log(data); //el console solo se pone en manytoOne

    });

    this.encuestaService.getConfirmaEliminacion().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor):false;

    });

  

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(EncuestaDialogoComponent);
  }

  eliminar(id:number){
    this.encuestaService.eliminar(id).subscribe(() =>{
      this.encuestaService.listar().subscribe(data =>{
        this.encuestaService.setLista(data);
      })
    });
  }

  ////
  filtrar(e:any){
    this.dataSource.filter= e.target.value.trim();
  }


}
