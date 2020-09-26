import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardDescrip: string;
  @Input() cardImgURL: string;
  @Input() cardColor: string;
  @Input() cardLink: string;
  @Input() cardHoverText: string;

  hover: boolean;
  constructor() {
  }

  ngOnInit(): void {
    this.hover=false;
  }

  styleCard() {
    if (!this.hover) {
      return {backgroundColor: this.cardColor, borderColor: this.cardColor}
    } else {
      return { backgroundColor: 'transparent', borderColor: this.cardColor}
    }
  }
}
