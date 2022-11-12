import { TarjetaService } from './../../../../service/tarjeta.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tarjeta-dialogo',
  templateUrl: './tarjeta-dialogo.component.html',
  styleUrls: ['./tarjeta-dialogo.component.css']
})
export class TarjetaDialogoComponent implements OnInit {

  constructor(private tarjetaService:TarjetaService, private dialogRef: MatDialogRef<TarjetaDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado:boolean){
    this.tarjetaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();

  }

}
