export class Coordenada {
  x: number;
  y: number;
  name: String;
  id: number;

  constructor(lat: number, long: number, name: string, id: number) {
    this.x = lat;
    this.y = long;
    this.name = name;
    this.id = id;
  }
}
