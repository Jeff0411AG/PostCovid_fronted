import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../../service/encuesta.service';

@Component({
  selector: 'app-encuesta-buscar',
  templateUrl: './encuesta-buscar.component.html',
  styleUrls: ['./encuesta-buscar.component.css']
})
export class EncuestaBuscarComponent implements OnInit {

  

  textoBuscar: string ="";

  constructor(private encuestaService: EncuestaService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    this.encuestaService.buscar(e.target.value).subscribe(data=>{
      this.encuestaService.setLista(data);

    });

  }


}
