import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ResultadoT } from 'src/app/model/resultadot';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-cantidad',
  templateUrl: './tarjeta-cantidad.component.html',
  styleUrls: ['./tarjeta-cantidad.component.css']
})
export class TarjetaCantidadComponent implements OnInit {

  dataSource: MatTableDataSource<ResultadoT> =new MatTableDataSource();
  displayedColumns: string[] = ['paciente', 'cantidad'];

  constructor(private tS: TarjetaService) { }

  ngOnInit(): void {
    this.tS.buscarTarjetas().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })
  }

}
