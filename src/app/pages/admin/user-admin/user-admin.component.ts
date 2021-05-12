import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from './user-form/user-form.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Profile} from "../../../core/models/Profile";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UserService} from "../../../shared/services/user.service";
import {ProfileService} from "../../../shared/services/profile.service";
import {User} from "../../../core/models/User";
import {ValidationComponent} from "../../../shared/modules/validation/validation.component";
import {MessageComponent} from "../../../shared/modules/message/message.component";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['name', 'lastname', 'username', 'document', 'creationDate', 'action'];
  form: FormGroup;
  dataSource = new MatTableDataSource<User>();
  user = new User();
  profile = new FormControl();
  profiles = [new Profile()];

  constructor(public dialog: MatDialog, private userService: UserService, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({profile: this.profile});
  }

  ngOnInit(): void {
    this.profileService.getAllProfiles().subscribe(data => this.profiles = data.response);
    this.userService.getAllUsers().subscribe(data => {
      const userTable: User[] = data.response.filter(user => user.state === true);
      this.dataSource = new MatTableDataSource<User>(userTable)
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSelectedUser(user: User) {
    this.user = user;
  }

  updateUser() {
    this.user.profile.push(this.profile.value);
    this.userService.updateUser(this.user);
  }

  deleteUser(id: string): void {
    const dialogRef = this.dialog.open(ValidationComponent, {
      data: "¿Está seguro que desea eliminar el usuario?, una vez eliminado del sistema no podrá recuperarlo"
    });
    dialogRef.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.userService.deleteUser(id).subscribe(response => {
          this.dialog.open(MessageComponent, {
            data: {message: response.mensaje, icon: "check", button: "¡Listo!"}
          });
        })
      }
    });
  }
  openDialog(user: User = new User()): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: user
    });
    dialogRef.afterClosed().subscribe((data: User) => {
      if (data) {
        console.log(data);
        this.dataSource.data.push(data);
      }
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

}
