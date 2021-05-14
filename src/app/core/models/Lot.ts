import {Laboratory} from "./laboratory";
import {Estado} from "./Estado";

export class Lot {
  id: number;
  numeroLote: number;
  cantidadDosis: number;
  costo: number;
  fechaAdquisicion: number;
  idLaboratorio: Laboratory;
  estado: Estado;
}
