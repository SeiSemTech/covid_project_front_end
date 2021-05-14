import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Laboratory} from "../../../core/models/laboratory";
import {LaboratoryService} from "../../../shared/services/laboratory.service";
import {MatTableDataSource} from "@angular/material/table";
import {Lot} from "../../../core/models/Lot";
import {User} from "../../../core/models/User";
import {VaccineLotsService} from "../../../shared/services/vaccine-lots.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MessageComponent} from "../../../shared/modules/message/message.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-vaccine-lots',
  templateUrl: './vaccine-lots.component.html',
  styleUrls: ['./vaccine-lots.component.scss'],
  providers: [DatePipe]
})
export class VaccineLotsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'cantidadDosis', 'idLaboratorio', 'fechaAdquisicion', 'estado', 'action'];
  public form: FormGroup;
  dataSource = new MatTableDataSource<Lot>();
  lot = new Lot();
  laboratories = [new Laboratory()];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder, private laboratoryService: LaboratoryService, private vaccineLotsService: VaccineLotsService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.laboratoryService.getAllLaboratories().subscribe(data => this.laboratories = data.response);
    this.vaccineLotsService.getAllVaccineLots().subscribe(data => {
      this.dataSource = new MatTableDataSource<Lot>(data.response)
    });
    this.initForm();
  }

  createVaccineLot() {
    if(this.lot.id)  {
      this.vaccineLotsService.updateVaccineLot(this.form.value).subscribe(response => response);
    } else {
      this.vaccineLotsService.createVaccineLot(this.form.value).subscribe(response => response);
    }
  }

  resetForm() {
    this.lot = new Lot();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [''],
      numeroLote: ['', [Validators.required]],
      cantidadDosis: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      fechaAdquisicion: ['', [Validators.required]],
      idLaboratorio: ['', [Validators.required]],
      estado: ['']
    });
  }

  selectVaccineLot(lot: Lot) {
    this.lot = lot
    this.form.setValue(lot);
    this.form.controls['idLaboratorio'].setValue(lot.idLaboratorio.id);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
