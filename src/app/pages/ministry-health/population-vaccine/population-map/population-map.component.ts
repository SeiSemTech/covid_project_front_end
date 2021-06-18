import {Component, Inject, OnInit} from '@angular/core';
import {PopulationService} from "../../../../shared/services/population.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {LocationService} from "../../../../shared/services/location.service";
import {Coordenada} from "../../../../core/models/Coordenada";
import {User} from "../../../../core/models/User";
import {Poblacion} from "../../../../core/models/Poblacion";

@Component({
  selector: 'app-population-map',
  templateUrl: './population-map.component.html',
  styleUrls: ['./population-map.component.scss']
})
export class PopulationMapComponent implements OnInit{

  ubicacionCentral: Coordenada | undefined;
  coordenada: Coordenada;
  error: boolean = true;

  address = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.address.hasError('required')) {
      return 'You must enter a value';
    }

    return this.address.hasError('address') ? 'Not a valid address' : '';
  }

  constructor(
    private populationService: PopulationService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Poblacion,
    private locationService: LocationService) {
  }

  ngOnInit(): void {
    console.log(this.data);
    // this.ubicacionCentral = new Coordenada(this.datos.input.x, this.datos.input.y, this.datos.input.address, 1);
    // this.load();
  }

  load() {
    // let coord = new Coordenada($event.coords.lat, $event.coords.lng);
    // this.datos.coordinateList.forEach(lugar => {
    //   let ubicacionData = {
    //     position: {lat: lugar.x, lng: lugar.y},
    //     name: lugar.address
    //   }
    //   let coord = new Coordenada(ubicacionData.position.lat, ubicacionData.position.lng, ubicacionData.name);
    //   this.coordenadas.push(coord);
    // });
  }

  modifyAddress() {
    console.log(this.address.value);
    // this.locationService.getLocation(this.address.value).subscribe(a => console.log(a));
    this.locationService.getClosestAddress({input: this.address.value}).subscribe( a => {
      let coordinate: Coordenada = new Coordenada(a.response.x, a.response.y, a.response.address, a.response.id);
      this.error = a.error != 0;
      this.coordenada = coordinate;
    })
  }

  savePlace() {
    const save:NewAddress = {id: this.data.id, centroSalud: {id: this.coordenada.id}};
    this.populationService.updatePatient(save).subscribe();
  }

}

export class NewAddress {
  id: number;
  centroSalud: {
    id: number;
  };
}
