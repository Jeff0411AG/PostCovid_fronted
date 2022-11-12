
import { Pregunta } from './../model/pregunta';

import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encuesta } from '../model/encuesta';


@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private url:string = "http://localhost:8084/Encuesta";
  //private url: string = "https://post-covid-backend.herokuapp.com/Encuesta"
  
  //private url: string = `${environment.host}/vehiculos`
  private listaCambio = new Subject<Encuesta[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Encuesta[]>(this.url);
  }
  insertar(vehiculo: Encuesta) {

    return this.http.post(this.url, vehiculo);
  }

  modificar(vehiculo: Encuesta) {

    return this.http.put(this.url, vehiculo);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Encuesta[]>(`${this.url}/buscar`, texto);
  }
  listarId(id: number) {

    return this.http.get<Encuesta>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Encuesta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
}
