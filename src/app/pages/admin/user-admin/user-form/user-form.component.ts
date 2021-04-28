import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AnimationOptions} from "ngx-lottie";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../shared/services/auth.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public options: AnimationOptions = {path: '/assets/lottie/covid_login.json'};
  public hide = true;
  public form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product_info: string; is_new: boolean}, public dialog: MatDialog, private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  testMessage: string = '';

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
