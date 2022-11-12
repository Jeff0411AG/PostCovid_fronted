import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/service/tarjeta.service';

@Component({
  selector: 'app-tarjeta-buscar',
  templateUrl: './tarjeta-buscar.component.html',
  styleUrls: ['./tarjeta-buscar.component.css']
})
export class TarjetaBuscarComponent implements OnInit {

  textoBuscar: string ="";

  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit(): void {
  }

  buscar(e:any){
    this.tarjetaService.buscar(e.target.value).subscribe(data=>{
      this.tarjetaService.setLista(data);

    });

  }

}
