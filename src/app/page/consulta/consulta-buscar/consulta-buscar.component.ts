import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-consulta-buscar',
  templateUrl: './consulta-buscar.component.html',
  styleUrls: ['./consulta-buscar.component.css']
})
export class ConsultaBuscarComponent implements OnInit {

  textoBuscar: string ="";

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    this.consultaService.buscar(e.target.value).subscribe(data =>{
      this.consultaService.setLista(data);
    });
  }

}
