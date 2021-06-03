import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from './user-form/user-form.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Rol} from "../../../core/models/Rol";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../../../shared/services/user.service";
import {ProfileService} from "../../../shared/services/profile.service";
import {User} from "../../../core/models/User";
import {ValidationComponent} from "../../../shared/modules/validation/validation.component";
import {MessageComponent} from "../../../shared/modules/message/message.component";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'lastname', 'username', 'document', 'creationDate', 'action'];
  form: FormGroup;
  dataSource = new MatTableDataSource<User>();
  user = new User();
  rol = new FormControl();
  roles = [new Rol()];

  constructor(public dialog: MatDialog, private userService: UserService, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({profile: this.rol});
  }

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe(data => this.roles = data.response);
    this.userService.getAllUsers().subscribe(data => {
      const userTable: User[] = data.response.filter(user => user.state === true);
      this.dataSource = new MatTableDataSource<User>(userTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getSelectedUser(user: User) {
    this.user = user;
  }

  updateUserProfiles() {
    if(!this.user.roles.find(rol => rol.id === this.rol.value.id)) {
      this.user.roles.push(this.rol.value);
      this.userService.updateUser(this.user).subscribe();
    } else {
      this.dialog.open(MessageComponent, {
        data: {message: 'Este usuario ya cuenta con el perfil seleccionado', icon: "failure-error", button: "¡Oops!"}
      });
    }
  }

  deleteUserProfile(id: number) {
    this.user.roles = this.user.roles.filter(rol => rol.id !== id);
    this.userService.updateUser(this.user).subscribe();
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ValidationComponent, {
      data: "¿Está seguro que desea desactivar el usuario?, una vez desactivado no podrá visualizarlo"
    });
    dialogRef.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.userService.deleteUser(user).subscribe(response => {
          this.dialog.open(MessageComponent, {
            data: {message: response.mensaje, icon: "check", button: "¡Listo!"}
          });
          this.dataSource = new MatTableDataSource<User>(this.dataSource.data.filter(u => u.id !== user.id));
        })
      }
    });
  }

  openDialog(user: User = new User()): void {
    const dialogRef = this.dialog.open(UserFormComponent, {data: user});
    dialogRef.afterClosed().subscribe((data: User) => {
      if (data) {
        this.dataSource.data.push(data);
      }
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
