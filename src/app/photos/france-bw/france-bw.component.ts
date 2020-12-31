import { Component, OnInit } from '@angular/core';
import { PARIS } from '../../data-directory';
import { GlobalConstants } from '../../app.component';

@Component({
  selector: 'app-france-bw',
  templateUrl: './france-bw.component.html',
  styleUrls: ['./france-bw.component.css']
})
export class FranceBwComponent implements OnInit {
  headerLine1 = 'Paris, then to the coast';
  headerLine2 = 'Paris and Étretat, May-June, 2017. One swallow darting an inkblot across the' +
      ' grey sky.';
  imgs = PARIS;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
