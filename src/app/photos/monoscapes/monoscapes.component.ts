import { Component, OnInit } from '@angular/core';
import { MOONSCAPES } from '../../data-directory';
import { GlobalConstants } from '../../app.component';

@Component({
  selector: 'app-monoscapes',
  templateUrl: './monoscapes.html',
  styleUrls: ['./monoscapes.css']
})
export class MonoscapesComponent implements OnInit {
  headerLine1 = 'Moonscapes';
  headerLine2 = 'August, 2019. An interplanetary drive across the country.';
  imgs = MOONSCAPES;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
