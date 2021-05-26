import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AnimationOptions} from "ngx-lottie";
import {ImagesPipe} from "../../../core/pipes/images.pipe";
import {LottieImages} from "../../../core/types/lottie-images";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string; icon: LottieImages; button: string}, private imagesPipe: ImagesPipe) { }
  public options: AnimationOptions = {path: this.imagesPipe.transform(this.data.icon, 'lottie')};
}
