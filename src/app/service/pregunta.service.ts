
import { Pregunta } from './../model/pregunta';
import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private url:string = "http://localhost:8084/pregunta";
  //private url: string = "https://post-covid-backend.herokuapp.com/pregunta"
  private listaCambio = new Subject<Pregunta[]>();
  private confirmaEliminacion=new Subject<Boolean>();

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any>(this.url);
  }

  insertar(pregunta: Pregunta){
    return this.http.post(this.url,pregunta);
  }

  ///Querrys TF
  catidadpreguntas(){
    return this.http.get<any>(`${this.url}/buscarCantidad`);
  }


  modificar(pregunta: Pregunta){
    return this.http.put(this.url, pregunta);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  ///buscar
  buscar(texto:string){
    console.log("algo")
    if(texto.length !=0){
      return this.http.post<Pregunta[]>(`${this.url}/buscar`, texto.toLowerCase());
    }
    return EMPTY;
  }

  listarId(id: number) {

    return this.http.get<Pregunta>(`${this.url}/${id}`);
  }

  getLista(){
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Pregunta[]){
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
