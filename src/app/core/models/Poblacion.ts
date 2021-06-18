import {Ocupacion} from "./ocupacion";
import {EstadoPaciente} from "./estadoPaciente";
import {Send} from "./Send";

export class Poblacion {
  id: number;
  id_cedula: string;
  tipo_documento: string;
  nombre_paciente: string;
  apellido_paciente: string;
  fechaNacimiento: number;
  ocupacion: Ocupacion;
  estadoPaciente: EstadoPaciente;
  centroSalud: Send;
}
