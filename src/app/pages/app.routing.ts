import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [
  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
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
