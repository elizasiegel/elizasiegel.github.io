import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  @Input() cardImg: string;
  @Input() cardColor: string;
  @Input() cardTitle: string;
  @Input() cardLink: string;
  hover: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
