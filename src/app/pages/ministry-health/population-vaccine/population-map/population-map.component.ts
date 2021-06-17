import {Component, OnInit} from '@angular/core';
import {PopulationService} from "../../../../shared/services/population.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {LocationService} from "../../../../shared/services/location.service";
import {Coordenada} from "../../../../core/models/Coordenada";

@Component({
  selector: 'app-population-map',
  templateUrl: './population-map.component.html',
  styleUrls: ['./population-map.component.scss']
})
export class PopulationMapComponent implements OnInit{

  ubicacionCentral: Coordenada | undefined;
  ubicacionEnProceso: Coordenada | undefined;

  address = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.address.hasError('required')) {
      return 'You must enter a value';
    }

    return this.address.hasError('address') ? 'Not a valid address' : '';
  }

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
    ],
    "input": {
      "x": 4.751649608927578,
      "y": -74.0970145448742,
      "address": "Conjunto arboleda del parque"
    }
  }
  coordenadas: Coordenada[] = [];

  constructor(
    private populationService: PopulationService,
    public dialog: MatDialog,
    private locationService: LocationService) {
  }

  ngOnInit(): void {
    this.ubicacionCentral = new Coordenada(this.datos.input.x, this.datos.input.y, this.datos.input.address);
    this.load();
  }

  load() {
    // let coord = new Coordenada($event.coords.lat, $event.coords.lng);
    this.datos.coordinateList.forEach(lugar => {
      let ubicacionData = {
        position: {lat: lugar.x, lng: lugar.y},
        name: lugar.address
      }
      let coord = new Coordenada(ubicacionData.position.lat, ubicacionData.position.lng, ubicacionData.name);
      this.coordenadas.push(coord);
    });
  }

  modifyAddress() {
    console.log(this.address.value);
    this.locationService.getClosestAddress({input: this.address.value}).subscribe();
  }

  saveNewAddress(newAddress: NewAddress) {
    this.populationService.updatePatient(newAddress).subscribe();
  }

}

export class NewAddress {
  id: number;
  centroSalud: {
    id: number;
  };
}
