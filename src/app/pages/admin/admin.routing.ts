import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {UserAdminComponent} from "./user-admin/user-admin.component";

const route: Routes = [{ path: '', component: UserAdminComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
