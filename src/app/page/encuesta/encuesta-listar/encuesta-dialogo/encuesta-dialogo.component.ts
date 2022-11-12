import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EncuestaService } from '../../../../service/encuesta.service';

@Component({
  selector: 'app-encuesta-dialogo',
  templateUrl: './encuesta-dialogo.component.html',
  styleUrls: ['./encuesta-dialogo.component.css']
})
export class EncuestaDialogoComponent implements OnInit {

  constructor(private encuestaService:EncuestaService, private dialogRef: MatDialogRef<EncuestaDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado:boolean){
    this.encuestaService.setConfirmaEliminacion(estado);
    this.dialogRef.close();

  }

}
