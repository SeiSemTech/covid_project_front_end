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
    this.profiles = this.profileService.getAllProfiles();
    this.userService.getAllUsers().subscribe((data: { response: User[] }) => {
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
    console.log(this.user)
    // this.userService.updateUser(user);
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
