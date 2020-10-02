import { Component, OnInit } from '@angular/core';
import { HOMEWORDS } from '../data-directory';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  data = HOMEWORDS;
  constructor() { }
  ngOnInit(): void {
  }
}
