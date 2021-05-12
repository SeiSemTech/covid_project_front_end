import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Profile} from "../../../core/models/Profile";
import {Laboratory} from "../../../core/models/laboratory";
import {LaboratoryService} from "../../../shared/services/laboratory.service";

@Component({
  selector: 'app-vaccine-lots',
  templateUrl: './vaccine-lots.component.html',
  styleUrls: ['./vaccine-lots.component.scss']
})
export class VaccineLotsComponent implements OnInit {

  public form: FormGroup;
  laboratories = [new Laboratory()];

  constructor(private formBuilder: FormBuilder, private laboratoryService: LaboratoryService) { }

  ngOnInit(): void {
    this.laboratoryService.getAllLaboratories().subscribe(data => this.laboratories = data.response);
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      numeroLote: ['', [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      cantidadDosis: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      costo: ['', [Validators.required]],
      fechaAdquisicion: ['', [Validators.required]],
      idLaboratorio: ['', [Validators.required]],
    })
  }

  createBatch() {

  }

}
