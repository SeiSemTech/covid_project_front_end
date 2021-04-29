import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserFormComponent} from './user-form/user-form.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimationOptions} from 'ngx-lottie';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
  public options: AnimationOptions = {path: '/assets/lottie/covid_login.json'};
  public hide = true;
  public form: FormGroup;

  constructor(public dialog: MatDialog, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  testMessage: string = "";

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkbox: [false],
    });
  }

  // tslint:disable-next-line:typedef
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
