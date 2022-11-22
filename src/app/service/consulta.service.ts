import { CantidadConsulta } from './../model/cantidadconsulta';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Consulta } from '../model/consulta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private url: string = "http://localhost:8084/consulta"
  //private url: string = "https://post-covid-backend.herokuapp.com/consulta";
  private listaCambio= new Subject<Consulta[]>();
  private confirmaEliminacion=new Subject<Boolean>();

  constructor(private http:HttpClient) { }

  listar() {
    return this.http.get<Consulta[]>(this.url);
  }
  insertar(consulta: Consulta) {

    return this.http.post(this.url, consulta);
  }

  ///Querry
  buscarCantidadconsutla() {
    return this.http.get<CantidadConsulta[]>(`${this.url}/Querry1`);
  }
  ////

  modificar(consulta: Consulta) {

    return this.http.put(this.url, consulta);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto: string) {

    return this.http.post<Consulta[]>(`${this.url}/buscar`, texto);
  }

  listarId(id: number) {

    return this.http.get<Consulta>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Consulta[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
