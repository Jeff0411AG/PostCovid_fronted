import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Encuesta } from '../../../model/encuesta';
import { EncuestaService } from '../../../service/encuesta.service';

@Component({
  selector: 'app-encuesta-noviembre',
  templateUrl: './encuesta-noviembre.component.html',
  styleUrls: ['./encuesta-noviembre.component.css']
})
export class EncuestaNoviembreComponent implements OnInit {

  dataSource: MatTableDataSource<Encuesta> = new MatTableDataSource();
  displayedColumns:string[]= ['idEncuesta','fechaEncuesta','paciente','anotaciones']

  constructor(private Es: EncuestaService) { }

  ngOnInit(): void {
    this.Es.buscarNoviembre().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
