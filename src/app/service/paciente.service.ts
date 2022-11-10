import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import { Paciente } from '../model/paciente';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private url: string = `${environment.host}/paciente`
  private listaCambio = new Subject<Paciente[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Paciente[]>(this.url);
  }
  insertar(paciente: Paciente) {
    return this.http.post(this.url, paciente);
  }
  setLista(listaNueva: Paciente[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(paciente: Paciente) {
    return this.http.put(this.url + "/" + paciente.idPaciente, paciente);
  }
  listarId(id: number) {
    return this.http.get<Paciente>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      return this.http.post<Paciente[]>(`${this.url}/buscar`, texto.toLowerCase(), {
      });
    }
    return EMPTY;
  }

}