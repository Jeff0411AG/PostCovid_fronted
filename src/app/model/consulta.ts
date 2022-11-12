import { Doctor } from "./doctor";
import { Paciente } from "./paciente";


export class Consulta{
    idConsulta:number=0;
    fechaConsulta: string="";
    diagnositco: string="";
    observacion: string="";

    doctor: Doctor = new Doctor();
    paciente: Paciente = new Paciente();

}
