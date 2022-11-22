import { ConsultaService } from 'src/app/service/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/model/consulta';
import { Doctor } from 'src/app/model/doctor';
import { Paciente } from 'src/app/model/paciente';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorService } from 'src/app/service/doctor.service';
import { PacienteService } from 'src/app/service/paciente.service';
import * as moment from 'moment';

@Component({
  selector: 'app-consulta-editar',
  templateUrl: './consulta-editar.component.html',
  styleUrls: ['./consulta-editar.component.css']
})
export class ConsultaEditarComponent implements OnInit {


  consulta: Consulta=new Consulta();
  id:number =0;
  edicion: boolean = false;
  mensaje: string ="";

  ///ManyToOne
  ///////
  listaDoctores: Doctor[] =[];
  idDoctorSeleccionado: number=0;
  mensaje1:string="";
  /////
  listaPacientes: Paciente[]=[];
  idPacienteSeleccionado:number=0;
  mensaje2:string="";

  ////Fecha
  fechaSeleccionada: Date = moment().add(-1,'days').toDate();
  maxFecha:Date=moment().add(-1,'days').toDate();




  constructor(private consultaService: ConsultaService, private route: ActivatedRoute, private router: Router,
    private doctorService:DoctorService, private pacienteService: PacienteService) { }

  ngOnInit(): void {

    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id'] !=null;
      this.init();
    });
    ///ManytoOne
    ///
    this.doctorService.listar().subscribe(data =>{
      this.listaDoctores = data
    });
    ///
    this.pacienteService.listar().subscribe(data =>{
      this.listaPacientes = data
    });

  }

  aceptar(){
    
    if(this.consulta.diagnositco.length>0 && /*this.consulta.fechaConsulta>0 &&*/this.consulta.observacion.length>0 && this.idDoctorSeleccionado>0 && this.idPacienteSeleccionado>0){
        ///manyToOne
        let d =new Doctor();
        d.idDoctor=this.idDoctorSeleccionado;
        this.consulta.doctor=d;
        ///
        let p = new Paciente();
        p.idPaciente=this.idPacienteSeleccionado;
        this.consulta.paciente=p;
        ///Fecha
        this.consulta.fechaConsulta=moment(this.fechaSeleccionada).format('YYYY-MM-DDTHH:mm:ss')

        if(this.edicion){
          this.consultaService.modificar(this.consulta).subscribe(()=>{
            this.consultaService.listar().subscribe(data =>{
              this.consultaService.setLista(data);
            })
          })
        }else{
          this.consultaService.insertar(this.consulta).subscribe(()=>{
            this.consultaService.listar().subscribe(data =>{
              this.consultaService.setLista(data);
            });
          }, err =>{
            console.log(err);
          });
        }
        this.router.navigate(['consulta']);

    }
    else{
      this.mensaje1= "complete los valores requeridos";
    }

  }

  init(){
    if(this.edicion){
      this.consultaService.listarId(this.id).subscribe(data =>{
        this.consulta=data
        console.log(data);
        ///ManyToone
        this.idDoctorSeleccionado = data.doctor.idDoctor;
        ///
        this.idPacienteSeleccionado = data.paciente.idPaciente;
      });
    }

  }






}
