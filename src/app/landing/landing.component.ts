import { Component, OnInit } from '@angular/core';
import { HOMEWORDS } from '../data-directory';
import { GlobalConstants } from '../app.component';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data = HOMEWORDS;
  // isMobile = GlobalConstants.isMobile;
  isMobile;
  constructor( public breakpointObserver: BreakpointObserver ) { }
  ngOnInit(): void {
    this.breakpointObserver
        .observe(['(max-width: 600px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.isMobile = true;
          } else {
            this.isMobile = false;
          }
        });
  }
}
