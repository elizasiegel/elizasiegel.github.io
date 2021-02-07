import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { GlobalConstants } from '../app.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // isMobile = GlobalConstants.isMobile;
  isMobile;
  constructor( private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any,
               public breakpointObserver: BreakpointObserver ) {}
  ngOnInit(): void {
    this.breakpointObserver
        .observe(['(max-width: 680px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.isMobile = true;
          } else {
            this.isMobile = false;
          }
        });
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

}
