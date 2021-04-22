import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PATHS} from "../core/constants/route.constants";

const route: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: PATHS.HOME_ADMIN.PRINCIPAL, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
]

@NgModule({
  imports: [
    RouterModule.forRoot(route, {
      initialNavigation: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
