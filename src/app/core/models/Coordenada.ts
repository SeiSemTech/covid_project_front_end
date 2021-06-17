export class Coordenada {
  latitud: number;
  longitud: number;
  name: String;

  constructor(lat: number, long: number, name: string) {
    this.latitud = lat;
    this.longitud = long;
    this.name = name;
  }
}
