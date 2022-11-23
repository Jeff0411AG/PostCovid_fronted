import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Tarjeta } from '../../../model/tarjeta';
import { TarjetaService } from '../../../service/tarjeta.service';
import { TarjetaDialogoComponent } from './tarjeta-dialogo/tarjeta-dialogo.component';

@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent implements OnInit {

  lista: Tarjeta[] = [];
  dataSource:MatTableDataSource<Tarjeta> =new MatTableDataSource();
  ///añadimos el manyToOne
  displayedColumns:String[] = ['idTarjeta','metodoPayment','numberAccount','dateExpiration','numberCvc','paciente','acciones'];

  private idMayor: number= 0;

  constructor(private tarjetaService:TarjetaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.tarjetaService.listar().subscribe(data =>{
      this.lista = data;
      this.dataSource=new MatTableDataSource(data);
    });

    this.tarjetaService.getLista().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
      console.log(data); //el console solo se pone en manytoOne

    });

    this.tarjetaService.getConfirmaEliminacion().subscribe(data =>{
      data == true ? this.eliminar(this.idMayor):false;

    });

  }

  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(TarjetaDialogoComponent);
  }

  eliminar(id:number){
    this.tarjetaService.eliminar(id).subscribe(() =>{
      this.tarjetaService.listar().subscribe(data =>{
        this.tarjetaService.setLista(data);
      })
    });
  }

  ////
  filtrar(e:any){
    this.dataSource.filter= e.target.value.trim();
  }

}
