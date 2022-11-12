import { Paciente } from "./paciente";

export class Tarjeta{

    idTarjeta: number=0;
    metodoPayment: string="";
    numberAccount: string="";
    dateExpiration: string="";
    numberCvc: string="";
    paciente:Paciente=new Paciente();
}