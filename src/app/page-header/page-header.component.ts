import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstants } from '../app.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() line1: string;
  @Input() line2: string;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
