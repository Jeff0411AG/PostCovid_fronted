import { PacienteService } from './../../../../service/paciente.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-paciente-mensaje',
  templateUrl: './paciente-mensaje.component.html',
  styleUrls: ['./paciente-mensaje.component.css']
})
export class PacienteMensajeComponent implements OnInit {

  constructor(private pacienteoService: PacienteService,
    private dialogRef: MatDialogRef<PacienteMensajeComponent>
  ) { }

  ngOnInit(): void { }

  confirmar(estado: boolean) {
    this.pacienteoService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}

