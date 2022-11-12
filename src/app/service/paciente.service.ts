import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY,Subject } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  //private url:string=environment.host+"/        "

  //private url: string = `${environment.host}/paciente`
    //http://localhost:8084/paciente
  
    private url: string = "https://post-covid-backend.herokuapp.com/paciente"
    private listaCambio = new Subject<Paciente[]>()
    private confirmaEliminacion = new Subject<Boolean>()
    constructor(private http: HttpClient) { }
  
    listar() {
      return this.http.get<Paciente[]>(this.url);
    }
    insertar(paciente: Paciente) {
  
      return this.http.post(this.url, paciente);
    }
  
    modificar(paciente: Paciente) {
  
      return this.http.put(this.url, paciente);
    }
    eliminar(id: number) {
  
      return this.http.delete(`${this.url}/${id}`);
    }
    buscar(texto: string) {
  
      return this.http.post<Paciente[]>(`${this.url}/buscar`, texto);
    }
    /*listarId(id: number) {
  
      return this.http.get<Paciente>(`${this.url}/${id}`);
    }*/
    listarId(id: number) {
      return this.http.get<Paciente>(`${this.url}/${id}`);
    }
    
    getLista() {
      return this.listaCambio.asObservable();
    }
    setLista(listaNueva: Paciente[]) {
      this.listaCambio.next(listaNueva);
    }
    getConfirmaEliminacion() {
      return this.confirmaEliminacion.asObservable();
    }
    setConfirmaEliminacion(estado: Boolean) {
      this.confirmaEliminacion.next(estado);
    }

}
