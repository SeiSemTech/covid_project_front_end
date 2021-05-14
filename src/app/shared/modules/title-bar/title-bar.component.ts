import {Component, Input} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {

  @Input('title') title: string;
  @Input('icon') icon: string;
  @Input('color') color: 'blue'|'yellow'|'light'|'red';

  colors = ColorEnum;

  urlResolver(icon: string) {
    return "url('" + environment.assets + "svg/" + icon + ".svg')";
  }

}

enum ColorEnum {
  'blue'   = "#007AB7",
  'yellow' = "#D69400",
  'light'  = "#3CB6D2",
  'red'    = "#E52131"
}
