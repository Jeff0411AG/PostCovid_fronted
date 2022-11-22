import { Consulta } from 'src/app/model/consulta';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-consulta-consultanoviembre',
  templateUrl: './consulta-consultanoviembre.component.html',
  styleUrls: ['./consulta-consultanoviembre.component.css']
})
export class ConsultaConsultanoviembreComponent implements OnInit {

  dataSource: MatTableDataSource<Consulta> = new MatTableDataSource();
  displayedColumns:string[]= ['idConsulta','paciente','doctor', 'diagnositco', 'observacion','fechaConsulta']
  constructor(private cS: ConsultaService) { }

  ngOnInit(): void {
    this.cS.buscarConsultaNoviembre().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
    })

  }

}
