import { Component, Input, OnInit } from '@angular/core';
import { ColorEnum } from '../../../shared/modules/title-bar/title-bar.component';
import { SvgImages } from '../../../core/types/svg-images';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('titulo')titulo: string;
  @Input('icon')icon: SvgImages;
  @Input('subtitulo')subtitulo: string;
  @Input('color') color: 'blue'|'yellow'|'light'|'red';
  constructor() { }
  colors = ColorEnum;
  ngOnInit(): void {
  }

}
