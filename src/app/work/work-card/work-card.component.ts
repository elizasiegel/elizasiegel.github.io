import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstants } from '../../app.component';

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
  isMobile = GlobalConstants.isMobile;

  constructor() {
  }

  ngOnInit(): void {
    this.hover = false;
  }

  styleCard() {
    if (!this.isMobile) {
      if (!this.hover) {
        return { backgroundColor: this.cardColor, borderColor: this.cardColor };
      } else {
        return { backgroundColor: 'transparent', borderColor: this.cardColor};
      }
    }
    else {
      return {backgroundColor: this.cardColor, borderColor: this.cardColor};
    }
  }
}
