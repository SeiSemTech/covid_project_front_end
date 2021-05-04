import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from './user-form/user-form.component';
import {FormGroup} from '@angular/forms';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  public options: AnimationOptions = {path: '/assets/lottie/covid_login.json'};
  public hide = true;
  public form: FormGroup;

  constructor(public dialog: MatDialog) { }

  testMessage: string = "";

  ngOnInit(): void {
  }

  openDialog(isNew: boolean) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: { user_info: 'prueba', is_new: isNew }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.testMessage = result.user_info;
      }
    });
  }

}
