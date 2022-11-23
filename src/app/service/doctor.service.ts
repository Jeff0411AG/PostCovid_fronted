import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY,Subject } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  //private url:string=environment.host+"/        "

  //private url: string = `${environment.host}/doctor`
  //https://post-covid-backend.herokuapp.com/doctor
  private url: string = "http://localhost:8084/doctor"
  //private url: string = "https://post-covid-backend.herokuapp.com/doctor"


  
  private listaCambio = new Subject<Doctor[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Doctor[]>(this.url);
  }
  insertar(propietario: Doctor) {

    return this.http.post(this.url, propietario);
  }

  modificar(propietario: Doctor) {

    return this.http.put(this.url, propietario);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  buscar(texto:string) {
        console.log("algo")
    if (texto.length != 0) {
      return this.http.post<Doctor[]>(`${this.url}/buscar`, texto.toLowerCase());
    }
    return EMPTY;
  }
  listarId(id: number) {
    return this.http.get<Doctor>(`${this.url}/${id}`);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva: Doctor[]) {
    this.listaCambio.next(listaNueva);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }



  



}
