import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vaccine-lots',
  templateUrl: './vaccine-lots.component.html',
  styleUrls: ['./vaccine-lots.component.scss']
})
export class VaccineLotsComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      lastname: ['', [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      document: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    })
  }

  createBatch() {

  }

}
