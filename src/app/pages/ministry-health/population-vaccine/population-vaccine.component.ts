import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Poblacion} from "../../../core/models/Poblacion";
import {PopulationService} from "../../../shared/services/population.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-population-vaccine',
  templateUrl: './population-vaccine.component.html',
  styleUrls: ['./population-vaccine.component.scss']
})
export class PopulationVaccineComponent implements OnInit {

  displayedColumns: string[] = ['id', 'documento', 'paciente', 'fecha_nacimiento', 'ocupacion', 'etapa', 'estadoPaciente','centroSalud'];
  dataSource = new MatTableDataSource<Poblacion>();
  constructor(private populationService: PopulationService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.populationService.getAllProfiles().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Poblacion>(data.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
