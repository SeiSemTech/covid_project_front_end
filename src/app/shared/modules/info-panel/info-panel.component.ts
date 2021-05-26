import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SvgImages} from "../../../core/types/svg-images";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent {
  @Input('title') title: string;
  @Input('icon') icon: SvgImages;
  @Input('formGroup') form?: FormGroup;
}
