import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {Router} from '@angular/router';
import {PATHS} from '../../../core/constants/route.constants';
import {AuthService} from '../../../shared/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login} from '../../../core/models/Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public options: AnimationOptions = {path: '/assets/lottie/covid_login.json'};
  public hide = true;
  public form: FormGroup;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkbox: [false],
    });
  }

  goToAdmin() {
    this.router.navigate([PATHS.HOME_ADMIN.PRINCIPAL]);
  }

  login() {
    console.log('texto prueba: '+ this.form.value.user);
    const login: Login = {username: this.form.value.user, password: this.form.value.password};
    this.authService.login(login).subscribe((response:boolean) => {
      if(response) {
        this.router.navigate([PATHS.HOME_ADMIN.PRINCIPAL]);
      }
    } );
  }

}
