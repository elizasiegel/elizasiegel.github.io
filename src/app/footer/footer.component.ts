import { Component, OnInit } from '@angular/core';
import { CONNECTS } from '../data-directory';
import { GlobalConstants } from '../app.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  connects = CONNECTS;
  isMobile;
  constructor( public breakpointObserver: BreakpointObserver ) { }
  ngOnInit(): void {
    this.breakpointObserver
        .observe(['(max-width: 700px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.isMobile = true;
          } else {
            this.isMobile = false;
          }
        });
  }
}
