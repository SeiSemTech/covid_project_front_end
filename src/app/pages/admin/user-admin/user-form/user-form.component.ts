import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {User} from "../../../../core/models/User";
import {UserService} from "../../../../shared/services/user.service";
import {MessageComponent} from "../../../../shared/modules/message/message.component";

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
      name: ['', [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      lastname: ['', [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
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
        this.messageResponse(response.mensaje);
    } );

  }

  messageResponse(message: string) {
    this.dialog.open(MessageComponent, {
      data: { message: message, icon: "check", button: "¡Listo!" }
    });
  }

}
