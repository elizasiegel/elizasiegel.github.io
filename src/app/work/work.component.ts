import { Component, OnInit } from '@angular/core';
import { WorkCardComponent } from './work-card/work-card.component';
import { WORKCARDS } from '../data-directory';
import {GlobalConstants} from '../app.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  cards = WORKCARDS;
  headerLine1 = 'Explore selected works and publications below.';
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
