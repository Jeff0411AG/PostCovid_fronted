import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CantidadEncuestas } from '../../../model/cantidadEncuestas';
import { EncuestaService } from '../../../service/encuesta.service';

@Component({
  selector: 'app-encuesta-cantidad',
  templateUrl: './encuesta-cantidad.component.html',
  styleUrls: ['./encuesta-cantidad.component.css']
})
export class EncuestaCantidadComponent implements OnInit {

  dataSource: MatTableDataSource<CantidadEncuestas> = new MatTableDataSource();
  displayedColumns:string[]= ['paciente', 'cantidad']

  constructor(private eS: EncuestaService) { }

  ngOnInit(): void {
    this.eS.cantidadEncuestas().subscribe(data =>{
      this.dataSource =new MatTableDataSource(data);
    })
  }

}
