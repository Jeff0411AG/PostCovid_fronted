import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/service/pregunta.service';

@Component({
  selector: 'app-pregunta-buscar',
  templateUrl: './pregunta-buscar.component.html',
  styleUrls: ['./pregunta-buscar.component.css']
})
export class PreguntaBuscarComponent implements OnInit {

  textoBuscar: string ="";

  constructor(private preguntaService: PreguntaService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    this.preguntaService.buscar(e.target.value).subscribe(data=>{
      this.preguntaService.setLista(data);

    });

  }

}
