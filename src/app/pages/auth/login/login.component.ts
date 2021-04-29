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
  public options: AnimationOptions = {path: '/covid_project_front_end/assets/lottie/covid_login.json'};
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

  login() {
    const login: Login = this.form.value;
    this.authService.login(login).subscribe((response: {jwt}) => {
      if(response && response.jwt)
        this.router.navigate([PATHS.HOME_ADMIN.PRINCIPAL]);
    } );
  }

}
