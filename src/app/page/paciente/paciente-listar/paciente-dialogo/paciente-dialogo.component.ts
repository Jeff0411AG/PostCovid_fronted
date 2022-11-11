import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PacienteService } from '../../../../service/paciente.service';

@Component({
  selector: 'app-paciente-dialogo',
  templateUrl: './paciente-dialogo.component.html',
  styleUrls: ['./paciente-dialogo.component.css']
})
export class PacienteDialogoComponent implements OnInit {

  constructor(private pacienteService: PacienteService,
    private dialogRef: MatDialogRef<PacienteDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.pacienteService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
