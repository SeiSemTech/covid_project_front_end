import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {Router} from '@angular/router';
import {PATHS} from '../../../core/constants/route.constants';
import {AuthService} from '../../../shared/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../../core/models/Login';
import {MatDialog} from "@angular/material/dialog";
import {MessageComponent} from "../../../shared/modules/message/message.component";
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public options: AnimationOptions = {path: '/assets/lottie/covid_login.json'};
  public hide = true;
  public form: FormGroup;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const login: Login = this.form.value;
    this.authService.login(login).subscribe((response: {jwt, mensaje}) => {
      console.log(response)
      if(response && response.jwt) {
        const decoded = jwt_decode(response.jwt);
        console.log(decoded.sub);
        localStorage.setItem('token', response.jwt);
        this.router.navigate([PATHS.DASHBOARD.MAIN]);
      } else {
          this.dialog.open(MessageComponent, {
            data: { message: response.mensaje, icon: "sad_emoji", button: "¡Ooops!" }
          });
      }
    } );
  }

}
