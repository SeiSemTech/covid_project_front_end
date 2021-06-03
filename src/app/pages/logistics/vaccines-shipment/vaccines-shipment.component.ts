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
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from "@angular/material/sort";
import {MessageComponent} from "../../../shared/modules/message/message.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vaccines-shipment',
  templateUrl: './vaccines-shipment.component.html',
  styleUrls: ['./vaccines-shipment.component.scss']
})
export class VaccinesShipmentComponent implements OnInit {

  displayedColumns2: string[] = ['id', 'departamento', 'municipio', 'nombre', 'direccion', 'lote'];
  public form: FormGroup;
  dataSource = new MatTableDataSource<Lot>();
  dataSource2 = new MatTableDataSource<Send>();
  lot = new Lot();
  send = new Send();
  laboratories = [new Laboratory()];

  public allVaccines: number;
  public initVaccines: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder, private laboratoryService: LaboratoryService, private vaccinesShipmentService: MedicalCentersService, private vaccineLotsService: VaccineLotsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.laboratoryService.getAllLaboratories().subscribe(data => this.laboratories = data.response);
    this.vaccineLotsService.getAllVaccineLots().subscribe(data => {
      this.initVaccines = data.response.filter(vaccinessl => vaccinessl.laboratorio.id = 1).map(vaccine => vaccine.cantidad).reduce((a, b) => a + b, 0);
      this.allVaccines = this.initVaccines;
      this.dataSource = new MatTableDataSource<Lot>(data.response);
    });

    this.vaccinesShipmentService.getAllMedicalCenters().subscribe(data2 => {
      console.log(data2);
      this.dataSource2 = new MatTableDataSource<Send>(data2.response);
      this.dataSource2.paginator = this.paginator;
      this.dataSource2.sort = this.sort;
    });

    this.form = this.formBuilder.group({
      laboratorio: [''],
      cantidad: ['', [Validators.required]]
    });
  }

  recountVaccines() {
    const id = this.form.value.laboratorio;
    const amount = this.form.value.cantidad;
    this.initVaccines = this.dataSource.data.filter(vs => vs.laboratorio.id === id).map(v => v.cantidad).reduce((a, b) => a + b, 0);
    this.allVaccines = this.initVaccines;
    if (amount && amount > this.allVaccines) this.form.controls['cantidad'].setValue(this.allVaccines);
  }

  subtractVaccines() {
    if (!/[0-9]+/g.test(this.form.value.cantidad)) this.form.controls['cantidad'].setValue('');
    if (this.initVaccines >= this.form.value.cantidad) {
      this.allVaccines = this.initVaccines - this.form.value.cantidad;
    } else {
      this.allVaccines = 0;
      this.form.controls['cantidad'].setValue(this.initVaccines);
    }

  }

  save() {
    this.send.lote = this.form.value.cantidad;
    this.vaccinesShipmentService.updateMedicalCenters(this.send).subscribe(response =>
      this.dialog.open(MessageComponent, {
        data: {message: response.mensaje, icon: "check", button: "¡Listo!"}
      })
    );
  }

  applyFilter(event: Event) {
    this.dataSource2.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  selectVaccineLot(send: Send) {
    this.send = send
    this.form.setValue(send);
  }
}

