
import { Pregunta } from './../model/pregunta';

import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encuesta } from '../model/encuesta';


@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  //private url:string = "http://localhost:8084/pregunta";
  private url: string = "https://post-covid-backend.herokuapp.com/Encuesta"
  private listaCambio = new Subject<Encuesta[]>();
  private confirmaEliminacion=new Subject<Boolean>();

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any>(this.url);
  }

  insertar(pregunta: Encuesta){
    return this.http.post(this.url,pregunta);
  }

  modificar(pregunta: Encuesta){
    return this.http.put(this.url, pregunta);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  ///buscar
  buscar(texto:string){
    console.log("algo")
    if(texto.length !=0){
      return this.http.post<Encuesta[]>(`${this.url}/buscar`, texto.toLowerCase());
    }
    return EMPTY;
  }

  listarId(id: number) {

    return this.http.get<Encuesta>(`${this.url}/${id}`);
  }

  getLista(){
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Encuesta[]){
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
