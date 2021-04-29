import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AnimationOptions} from "ngx-lottie";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../../shared/services/auth.service";
import {User} from "../../../../core/models/User";
import {PATHS} from "../../../../core/constants/route.constants";
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public hide = true;
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product_info: string; is_new: boolean},
    public dialog: MatDialog, private userService: UserService, private formBuilder: FormBuilder) { }

  testMessage: string = '';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      id: ['', [Validators.required, Validators.min(5), Validators.max(12)]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordValidate: ['', [Validators.required]],
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

  createUser() {
    const user: User = this.form.value;
    this.userService.createUser(user).subscribe((response: {mensaje}) => {
      if(response)
        alert(response.mensaje);
    } );

  }

}
