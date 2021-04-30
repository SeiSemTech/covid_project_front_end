import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public options: AnimationOptions = {path: '/covid_project_front_end/assets/lottie/' + this.data.icon + '.json'};

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string; icon: string; button: string}) { }

  ngOnInit(): void {
  }

}
