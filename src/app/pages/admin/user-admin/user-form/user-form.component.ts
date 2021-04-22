import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product_info: string; is_new: boolean }) { }

  ngOnInit(): void {
  }

}
