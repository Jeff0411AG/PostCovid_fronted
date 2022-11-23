import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tarjeta } from 'src/app/model/tarjeta';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-dominio',
  templateUrl: './tarjeta-dominio.component.html',
  styleUrls: ['./tarjeta-dominio.component.css']
})
export class TarjetaDominioComponent implements OnInit {

  dataSource: MatTableDataSource<Tarjeta> =new MatTableDataSource();
  displayedColumns: string[] = ['idTarjeta','metodoPayment','numberAccount','paciente'];

  constructor(private tS: TarjetaService) { }

  ngOnInit(): void {

    this.tS.dominio().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
