import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PATHS} from "../core/constants/route.constants";
import {AuthGuard} from "../core/guards/auth.guard";

const route: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {path: PATHS.DASHBOARD.MAIN, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: PATHS.ADMIN.PRINCIPAL, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: PATHS.LOGISTICS.PRINCIPAL, loadChildren: () => import('./logistics/logistics.module').then(m => m.LogisticsModule)},
  {path: PATHS.MINISTRY_HEALTH.PRINCIPAL, loadChildren: () => import('./ministry-health/ministry-health.module').then(m => m.MinistryHealthModule)},
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
