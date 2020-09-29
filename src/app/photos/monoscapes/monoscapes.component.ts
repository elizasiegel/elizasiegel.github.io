import { Component, OnInit } from '@angular/core';
import { MOONSCAPES } from '../../data-directory';

@Component({
  selector: 'app-monoscapes',
  templateUrl: './monoscapes.html',
  styleUrls: ['./monoscapes.css']
})
export class MonoscapesComponent implements OnInit {
  headerLine1 = 'Moonscapes';
  headerLine2 = 'August, 2019. An interplanetary drive across the country.';
  imgs = MOONSCAPES;

  constructor() { }

  ngOnInit(): void {
  }

}
