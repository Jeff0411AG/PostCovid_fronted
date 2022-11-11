import { ActivatedRoute, Params, Router } from '@angular/router';
import { PreguntaService } from './../../../service/pregunta.service';
import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/model/pregunta';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-pregunta-editar',
  templateUrl: './pregunta-editar.component.html',
  styleUrls: ['./pregunta-editar.component.css']
})
export class PreguntaEditarComponent implements OnInit {

  pregunta:Pregunta= new Pregunta();
  id:number = 0;
  edicion: boolean = false;
  mensaje: string ="";

  ///para traer a los ManytoOne
  listaDoctores: Doctor[]=[];
  idDoctoresSeleccionado: number=0;
  mensaje1: string="";
  ////

  constructor(private preguntaService: PreguntaService, private route:ActivatedRoute, private router:Router
    , private doctorService:DoctorService) { }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    
    ///para el ManyToOne
    this.doctorService.listar().subscribe(data => { this.listaDoctores = data});
    //////
  }

  aceptar(){
    if(this.pregunta.descripcion.length >0 && this.pregunta.respuesta.length>0 /* para el ManytoOne*/&& this.idDoctoresSeleccionado>0){
      
      ///para el ManytoOne
      let d =new Doctor();
      d.idDoctor=this.idDoctoresSeleccionado;
      this.pregunta.doctor=d;
      ////
      
      if(this.edicion){
        this.preguntaService.modificar(this.pregunta).subscribe(()=>{
          this.preguntaService.listar().subscribe(data =>{
            this.preguntaService.setLista(data);
          });
        });

      }else{
        this.preguntaService.insertar(this.pregunta).subscribe(()=>{
          this.preguntaService.listar().subscribe(data =>{
            this.preguntaService.setLista(data);
          }); ///para el ManyToOne
        }, err =>{
          console.log(err);
        });
        ////////
      }

      this.router.navigate(['pregunta']);
    }else{
      this.mensaje = "Rellene todos los campos requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.preguntaService.listarId(this.id).subscribe(data =>{
        this.pregunta =data
        console.log(data);

        ////Para el ManyToOne
        this.idDoctoresSeleccionado = data.doctor.idDoctor;
        /////

      } );
    }
  }



}
