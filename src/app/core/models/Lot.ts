import {Laboratory} from "./laboratory";
import {Estado} from "./Estado";

export class Lot {
  id: number;
  numeroLote: number;
  cantidad: number;
  costo: number;
  fecha: number;
  laboratorio: Laboratory;
  estado: Estado;
}
