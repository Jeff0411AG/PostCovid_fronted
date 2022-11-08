import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-dialogo',
  templateUrl: './doctor-dialogo.component.html',
  styleUrls: ['./doctor-dialogo.component.css']
})
export class DoctorDialogoComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private dialogRef: MatDialogRef<DoctorDialogoComponent>
  ) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.doctorService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}


