import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Laboratory} from "../../../core/models/laboratory";
import {LaboratoryService} from "../../../shared/services/laboratory.service";
import {MatTableDataSource} from "@angular/material/table";
import {Lot} from "../../../core/models/Lot";
import {VaccineLotsService} from "../../../shared/services/vaccine-lots.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ValidationComponent} from "../../../shared/modules/validation/validation.component";
import {MessageComponent} from "../../../shared/modules/message/message.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-vaccine-lots',
  templateUrl: './vaccine-lots.component.html',
  styleUrls: ['./vaccine-lots.component.scss'],
})
export class VaccineLotsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'cantidad', 'laboratorio', 'fecha', 'estado', 'action'];
  public form: FormGroup;
  dataSource = new MatTableDataSource<Lot>();
  lot = new Lot();
  laboratories = [new Laboratory()];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder, private laboratoryService: LaboratoryService, private vaccineLotsService: VaccineLotsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.laboratoryService.getAllLaboratories().subscribe(data => this.laboratories = data.response);
    this.vaccineLotsService.getAllVaccineLots().subscribe(data => {
      this.dataSource = new MatTableDataSource<Lot>(data.response)
    });
    this.initForm();
  }

  createVaccineLot() {
    this.form.value.estado = {id:1};
    this.form.value.costo = 0;
    if(this.lot.id)  {
      this.vaccineLotsService.updateVaccineLot(this.form.value).subscribe(response => this.dialogFunction(response));
    } else {
      this.vaccineLotsService.createVaccineLot(this.form.value).subscribe(response => this.dialogFunction(response));
    }
  }

  resetForm() {
    this.lot = new Lot();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [''],
      numero: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      laboratorio: ['', [Validators.required]],
      estado: ['']
    });
  }

  selectVaccineLot(lot: Lot) {
    this.lot = lot
    this.form.setValue(lot);
    this.form.controls['laboratorio'].setValue(lot.laboratorio);
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

  deleteUser(lot: Lot): void {
    const dialogRef = this.dialog.open(ValidationComponent, {
      data: "¿Está seguro que desea desactivar el usuario?, una vez desactivado no podrá visualizarlo"
    });
    dialogRef.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.vaccineLotsService.deleteVaccineLot(lot).subscribe(response => {
          this.dialogFunction(response);
          this.dataSource = new MatTableDataSource<Lot>(this.dataSource.data.filter(l => l.id !== lot.id));
        })
      }
    });
  }

  dialogFunction(response: any) {
    this.dialog.open(MessageComponent, {
      data: {message: response.mensaje, icon: "check", button: "¡Listo!"}
    });
  }

}
