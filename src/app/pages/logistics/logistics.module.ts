import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VaccineLotsComponent} from "./vaccine-lots/vaccine-lots.component";
import {AuthRoutingModule} from "./logistics.routing";
import {VaccinesShipmentComponent} from './vaccines-shipment/vaccines-shipment.component';
import {InfoPanelModule} from "../../shared/modules/info-panel/info-panel.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {TitleBarModule} from "../../shared/modules/title-bar/title-bar.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorInterceptor} from "../../shared/interceptor/interceptor.interceptor";
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from "@angular/material/core";
import {MessageModule} from "../../shared/modules/message/message.module";
import {LottieModule} from "ngx-lottie";
import {playerFactory} from "../auth/auth.module";

@NgModule({
  declarations: [
    VaccineLotsComponent,
    VaccinesShipmentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
    InfoPanelModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    TitleBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MessageModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ]
})
export class LogisticsModule { }
