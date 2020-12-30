import { Component, OnInit, Inject, Input, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { GlobalConstants } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() scrollEl: HTMLElement;
  isMobile = GlobalConstants.isMobile;
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }
    ngOnInit(): void {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '.theEnd',
      });
    }

}
