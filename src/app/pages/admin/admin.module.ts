import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAdminComponent} from './user-admin/user-admin.component';
import {MatButtonModule} from "@angular/material/button";
import {UserFormComponent} from './user-admin/user-form/user-form.component';
import {AdminRoutingModule} from "./admin.routing";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    UserAdminComponent,
    UserFormComponent,
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        AdminRoutingModule,
        MatIconModule
    ]
})
export class AdminModule {
}
