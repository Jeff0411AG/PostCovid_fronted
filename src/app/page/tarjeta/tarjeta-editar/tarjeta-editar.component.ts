import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tarjeta } from '../../../model/tarjeta';
import { Paciente } from '../../../model/paciente';
import { TarjetaService } from '../../../service/tarjeta.service';
import { PacienteService } from '../../../service/paciente.service';
import * as moment from 'moment';

@Component({
  selector: 'app-tarjeta-editar',
  templateUrl: './tarjeta-editar.component.html',
  styleUrls: ['./tarjeta-editar.component.css']
})
export class TarjetaEditarComponent implements OnInit {

  tarjeta:Tarjeta= new Tarjeta();
  id:number = 0;
  edicion: boolean = false;
  listaPacientes: Paciente[]=[];
  idPacientesSeleccionado: number=0;
  fechaSeleccionadaT: Date = moment().add(-1, 'days').toDate();
  mensaje: string ="";
  maxFechaT: Date = moment().add(-1, 'days').toDate();
  mensaje1: string = "";
  
  constructor(private tarjetaService: TarjetaService, private route:ActivatedRoute, private router:Router
    , private pacienteService:PacienteService) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    ///para el ManyToOne
    this.pacienteService.listar().subscribe(data => { this.listaPacientes = data});
    //////
  }

  aceptar(){
    if(this.tarjeta.metodoPayment.length >0 ){
      
      ///para el ManytoOne
      let d =new Paciente();
      d.idPaciente=this.idPacientesSeleccionado;
      this.tarjeta.paciente=d;
      this.tarjeta.dateExpiration = moment(this.fechaSeleccionadaT).format('YYYY-MM-DDTHH:mm:ss');
     
      ////
      
      if(this.edicion){
        this.tarjetaService.modificar(this.tarjeta).subscribe(()=>{
          this.tarjetaService.listar().subscribe(data =>{
            this.tarjetaService.setLista(data);
          });
        });

      }else{
        this.tarjetaService.insertar(this.tarjeta).subscribe(()=>{
          this.tarjetaService.listar().subscribe(data =>{
            this.tarjetaService.setLista(data);
          }); ///para el ManyToOne
        }, err =>{
          console.log(err);
        });
        ////////
      }

      this.router.navigate(['tarjeta']);
    }else{
      this.mensaje1 = "Rellene todos los campos requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.tarjetaService.listarId(this.id).subscribe(data =>{
        this.tarjeta =data
        console.log(data);

        ////Para el ManyToOne
        this.idPacientesSeleccionado = data.paciente.idPaciente;
        /////

      } );
    }
  }



}
