import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Poblacion} from "../../../core/models/Poblacion";
import {PopulationService} from "../../../shared/services/population.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {User} from "../../../core/models/User";
import {UserFormComponent} from "../../admin/user-admin/user-form/user-form.component";
import {MatDialog} from "@angular/material/dialog";
import {PopulationMapComponent} from "./population-map/population-map.component";
import {MatButtonModule} from '@angular/material/button';

export class Coordenada {
  latitud: number;
  longitud: number;
  name: String;
  constructor(lat: number, long: number, name:string ){
    this.latitud = lat;
    this.longitud = long;
    this.name = name;
  }
}

@Component({
  selector: 'app-population-vaccine',
  templateUrl: './population-vaccine.component.html',
  styleUrls: ['./population-vaccine.component.scss']
})
export class PopulationVaccineComponent implements OnInit {

  displayedColumns: string[] = ['id', 'documento', 'paciente', 'fecha_nacimiento', 'ocupacion', 'etapa', 'estadoPaciente', 'centroSalud', 'action'];
  dataSource = new MatTableDataSource<Poblacion>();
  ubicacionCentral: Coordenada | undefined;
  ubicacionEnProceso: Coordenada | undefined;

  datos = {
    "coordinateList": [
      {
        "x": 4.7501342399421445,
        "y": -74.09565336843772,
        "address": "Cra. 104 #148 - 07, Bogotá, Cundinamarca"
      },
      {
        "x": 4.702362865602372,
        "y": -74.04156321729367,
        "address": "Cl. 142 #111A-06, Suba, Bogotá"
      },
      {
        "x": 35.36100524652076,
        "y": 138.72733665437113,
        "address": "Monte Fuji, Honshu, Japón"
      },
      {
        "x": 51.12975003718817,
        "y": 71.4223813141149,
        "address": "Nurzhol Boulevard, Astaná, Kazakhstan"
      }
    ],
    "input": {
      "x": 4.751649608927578,
      "y": -74.0970145448742,
      "address": "Conjunto arboleda del parque"
    }
  }
  coordenadas : Coordenada[] = [];

  constructor(private populationService: PopulationService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.ubicacionCentral = new Coordenada(this.datos.input.x, this.datos.input.y, this.datos.input.address);
    this.load();
    this.populationService.getAllProfiles().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Poblacion>(data.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  load() {
    // let coord = new Coordenada($event.coords.lat, $event.coords.lng);
    this.datos.coordinateList.forEach(lugar => {
      let ubicacionData = {
        position: { lat: lugar.x, lng: lugar.y },
        name: lugar.address
      }
      let coord = new Coordenada(ubicacionData.position.lat, ubicacionData.position.lng,ubicacionData.name);
      this.coordenadas.push(coord);
    });
  }

  openDialog(): void {
    this.dialog.open(PopulationMapComponent);
  }

}
