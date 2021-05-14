import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  @Input('title') title: string;
  @Input('icon') icon: string;
  @Input('formGroup') form?: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  urlResolver(icon: string) {
    return "url('" + environment.assets + "svg/" + icon + ".svg')";
  }

}
