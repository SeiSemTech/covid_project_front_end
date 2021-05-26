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
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {InfoPanelModule} from "../../shared/modules/info-panel/info-panel.module";
import {TitleBarModule} from "../../shared/modules/title-bar/title-bar.module";
import {PipesModule} from "../../core/pipes/pipes.module";

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
    MessageModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    InfoPanelModule,
    TitleBarModule,
    PipesModule
  ]
})
export class AdminModule {
}
