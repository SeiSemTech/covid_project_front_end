import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from './user-form/user-form.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimationOptions} from 'ngx-lottie';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';
import {PATHS} from "../../../core/constants/route.constants";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  public options: AnimationOptions = {path: '/assets/lottie/covid_login.json'};
  public hide = true;
  public form: FormGroup;

  constructor(public dialog: MatDialog, private router: Router) { }

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

  closeSession() {
    this.router.navigate([PATHS.AUTHENTICATION.PRINCIPAL]);
  }
}
