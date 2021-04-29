import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AnimationOptions} from "ngx-lottie";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
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
      document: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    }, {validators: Validators.compose([
      this.sameData, Validators.required
      ])} );
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

  sameData(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password').value;
    const confirm = control.get('confirm').value;
    if (password != confirm) return { 'noMatch': true }
    return null
  }

  createUser() {
    const user: User = this.form.value;
    user.creationDate = Date.now();
    user.state = true;
    this.userService.createUser(user).subscribe((response: {mensaje}) => {
      if(response)
        alert(response.mensaje);
    } );

  }

}
