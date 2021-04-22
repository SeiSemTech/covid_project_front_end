import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserFormComponent} from "./user-form/user-form.component";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  testMessage: string = "";

  ngOnInit(): void {
  }

  openDialog(isNew: boolean) {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: { user_info: 'prueba', is_new: isNew }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.testMessage = result.user_info;
      }
    });
  }

}
