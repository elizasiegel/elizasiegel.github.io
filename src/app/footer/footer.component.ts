import { Component, OnInit } from '@angular/core';
import { CONNECTS } from '../data-directory';
import { GlobalConstants } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  connects = CONNECTS;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
