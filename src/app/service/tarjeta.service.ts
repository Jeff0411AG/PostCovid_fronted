
import { Tarjeta } from './../model/tarjeta';
import { Subject, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultadoT } from '../model/resultadot';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private url:string = "http://localhost:8084/tarjeta";
  //private url: string = "https://post-covid-backend.herokuapp.com/tarjeta"
  private listaCambio = new Subject<Tarjeta[]>();
  private confirmaEliminacion=new Subject<Boolean>();

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any>(this.url);
  }

  insertar(tarjeta: Tarjeta){
    return this.http.post(this.url,tarjeta);
  }

  buscarTarjetas(){
    return this.http.get<ResultadoT[]>(`${this.url}/cantidades`);
  }

  modificar(tarjeta: Tarjeta){
    return this.http.put(this.url, tarjeta);
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  buscar(texto: string) {

    return this.http.post<Tarjeta[]>(`${this.url}/buscar`, texto);
  }
  
  listarId(id: number) {

    return this.http.get<Tarjeta>(`${this.url}/${id}`);
  }

  getLista(){
    return this.listaCambio.asObservable();
  }

  setLista(listaNueva: Tarjeta[]){
    this.listaCambio.next(listaNueva);
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }


}
