import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Laboratory} from '../../../core/models/laboratory';
import {LaboratoryService} from '../../../shared/services/laboratory.service';
import {MatTableDataSource} from '@angular/material/table';
import {Lot} from '../../../core/models/Lot';
import {User} from '../../../core/models/User';
import {MedicalCentersService} from '../../../shared/services/medical-centers.service';
import {Send} from "../../../core/models/Send";
import {VaccineLotsService} from "../../../shared/services/vaccine-lots.service";
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-vaccines-shipment',
  templateUrl: './vaccines-shipment.component.html',
  styleUrls: ['./vaccines-shipment.component.scss']
})
export class VaccinesShipmentComponent implements OnInit, AfterViewInit {

  displayedColumns2: string[] = ['id', 'depa_nombre', 'muni_nombre', 'sede_nombre', 'direccion', 'telefono', 'action'];
  public form2: FormGroup;
  public form: FormGroup;
  dataSource = new MatTableDataSource<Lot>();
  dataSource2 = new MatTableDataSource<Send>();
  lot = new Lot();
  send = new Send();
  laboratories = [new Laboratory()];

  public asd: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private formBuilder: FormBuilder, private laboratoryService: LaboratoryService, private vaccinesShipmentService: MedicalCentersService, private vaccineLotsService: VaccineLotsService) { }

  ngOnInit(): void {
    this.laboratoryService.getAllLaboratories().subscribe(data => this.laboratories = data.response);
    this.vaccineLotsService.getAllVaccineLots().subscribe(data => {
      this.asd = data.response.filter(vaccinessl => vaccinessl.idLaboratorio.id = 1).map(vaccine =>vaccine.cantidadDosis).reduce((a, b) => a + b, 0);
      this.dataSource = new MatTableDataSource<Lot>(data.response);
    });

    this.vaccinesShipmentService.getAllMedicalCenters().subscribe(data2 => {
      console.log(data2);
      this.dataSource2 = new MatTableDataSource<Send>(data2);
    });

    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      numeroLote: ['', [Validators.required]],
      cantidadDosis: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      fechaAdquisicion: ['', [Validators.required]],
      idLaboratorio: ['', [Validators.required]],

    });
    this.form2 = this.formBuilder.group({
      id: ['', [Validators.required]],
      depa_nombre: ['', [Validators.required]],
      muni_nombre: ['', [Validators.required]],
      sede_nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  }
  funcionPrueba(){
   // const id = this.form.value.idLaboratorio;
   // this.asd = this.dataSource.data.filter(vaccinessl => vaccinessl.idLaboratorio = id).map(vaccine =>vaccine.cantidadDosis).reduce((a, b) => a + b, 0);
   // return id;
  }
  createBatch() {
  }

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.dataSource2.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
}

