import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Encuesta } from '../../../model/encuesta';
import { Paciente } from '../../../model/paciente';
import { EncuestaService } from '../../../service/encuesta.service';
import { PacienteService } from '../../../service/paciente.service';

@Component({
  selector: 'app-encuesta-editar',
  templateUrl: './encuesta-editar.component.html',
  styleUrls: ['./encuesta-editar.component.css']
})
export class EncuestaEditarComponent implements OnInit {

  encuesta:Encuesta= new Encuesta();
  id:number = 0;
  edicion: boolean = false;
  mensaje: string ="";

  ///para traer a los ManytoOne
  listaPacientes: Paciente[]=[];
  idPacienteSeleccionado: number=0;
  mensaje1: string="";
  ////

  constructor(private encuestaService: EncuestaService, private route:ActivatedRoute, private router:Router
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
    if(this.encuesta.fechaEncuesta.length >0 && this.encuesta.anotaciones.length>0 /* para el ManytoOne*/&& this.idPacienteSeleccionado>0){
      
      ///para el ManytoOne
      let d =new Paciente();
      d.idPaciente=this.idPacienteSeleccionado;
      this.encuesta.paciente=d;
      ////
      
      if(this.edicion){
        this.encuestaService.modificar(this.encuesta).subscribe(()=>{
          this.encuestaService.listar().subscribe(data =>{
            this.encuestaService.setLista(data);
          });
        });

      }else{
        this.encuestaService.insertar(this.encuesta).subscribe(()=>{
          this.encuestaService.listar().subscribe(data =>{
            this.encuestaService.setLista(data);
          }); ///para el ManyToOne
        }, err =>{
          console.log(err);
        });
        ////////
      }

      this.router.navigate(['encuesta']);
    }else{
      this.mensaje = "Rellene todos los campos requeridos";
    }
  }

  init(){
    if(this.edicion){
      this.encuestaService.listarId(this.id).subscribe(data =>{
        this.encuesta =data
        console.log(data);

        ////Para el ManyToOne
        this.idPacienteSeleccionado = data.paciente.idPaciente;
        /////

      } );
    }
  }

}
