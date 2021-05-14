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
  public testMessage: string = '';
  public hide = true;
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public dialog: MatDialog,
    private userService: UserService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.data.name, [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      lastname: [this.data.lastname, [Validators.required, Validators.pattern('[A-Za-zñÑ ]+')]],
      document: [this.data.document, [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      username: [this.data.username, [Validators.required]],
      password: [this.data.password, [Validators.required]],
      confirm: [this.data.password, [Validators.required]],
    }, {
      validators: Validators.compose([
        this.samePassword, Validators.required
      ])
    });
  }

  samePassword(control: AbstractControl): ValidationErrors | null {
    const samePassword = control.get('password').value != control.get('confirm').value
    return samePassword ? {'noMatch': true} : null;
  }

  createUser() {
    if (this.data.id) {
      this.data.name = this.form.value.name;
      this.data.lastname = this.form.value.lastname;
      this.data.document = this.form.value.document;
      this.data.username = this.form.value.username;
      this.userService.updateUser(this.data).subscribe(response  => this.msmResponse(response));
    } else {
      this.data = this.form.value;
      this.data.creationDate = Date.now();
      this.data.state = true;
      this.userService.createUser(this.data).subscribe(response => this.msmResponse(response));
    }
  }

  msmResponse(response: { mensaje, data }) {
    if (response) {
      this.dialogRef.close(response.data);
      this.dialog.open(MessageComponent, {
        data: {message: response.mensaje, icon: "check", button: "¡Listo!"}
      });
    }
  }

}
