import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Laboratory} from "../../../core/models/laboratory";
import {LaboratoryService} from "../../../shared/services/laboratory.service";
import {MatTableDataSource} from "@angular/material/table";
import {Lot} from "../../../core/models/Lot";
import {User} from "../../../core/models/User";
import {VaccineLotsService} from "../../../shared/services/vaccine-lots.service";

@Component({
  selector: 'app-vaccine-lots',
  templateUrl: './vaccine-lots.component.html',
  styleUrls: ['./vaccine-lots.component.scss']
})
export class VaccineLotsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cantidadDosis', 'idLaboratorio', 'fechaAdquisicion', 'action'];
  public form: FormGroup;
  dataSource = new MatTableDataSource<Lot>();
  lot = new Lot();
  laboratories = [new Laboratory()];

  constructor(private formBuilder: FormBuilder, private laboratoryService: LaboratoryService, private vaccineLotsService: VaccineLotsService) { }

  ngOnInit(): void {
    this.laboratoryService.getAllLaboratories().subscribe(data => this.laboratories = data.response);
    this.vaccineLotsService.getAllVaccineLots().subscribe(data => {
      this.dataSource = new MatTableDataSource<Lot>(data.response)
    });
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      numeroLote: ['', [Validators.required]],
      cantidadDosis: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      fechaAdquisicion: ['', [Validators.required]],
      idLaboratorio: ['', [Validators.required]],
    })
  }

  createBatch() {

  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

}
