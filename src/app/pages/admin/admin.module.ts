import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {MatButtonModule} from "@angular/material/button";
import {UserFormComponent} from './user-admin/user-form/user-form.component';
import {AdminRoutingModule} from "./admin.routing";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LottieModule} from "ngx-lottie";
import {playerFactory} from "../auth/auth.module";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {AuthRoutingModule} from "../auth/auth.routing";
import {MessageModule} from "../../shared/modules/message/message.module";


@NgModule({
  declarations: [
    UserAdminComponent,
    UserFormComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    LottieModule.forRoot({player: playerFactory}),
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    AdminRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    AuthRoutingModule,
    MessageModule
  ]
})
export class AdminModule {
}
