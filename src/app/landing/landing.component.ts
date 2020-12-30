import { Component, OnInit } from '@angular/core';
import { HOMEWORDS } from '../data-directory';
import { GlobalConstants } from '../app.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data = HOMEWORDS;
  isMobile = GlobalConstants.isMobile;
  constructor() { }
  ngOnInit(): void {
  }
}
