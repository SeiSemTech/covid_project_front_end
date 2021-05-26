import {Component, Input} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {SvgImages} from "../../../core/types/svg-images";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {

  @Input('title') title: string;
  @Input('icon') icon: SvgImages;
  @Input('color') color: 'blue'|'yellow'|'light'|'red';

  colors = ColorEnum;

}

enum ColorEnum {
  'blue'   = "#007AB7",
  'yellow' = "#D69400",
  'light'  = "#3CB6D2",
  'red'    = "#E52131"
}
