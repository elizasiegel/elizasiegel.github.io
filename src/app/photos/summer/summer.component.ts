import { Component, OnInit } from '@angular/core';
import { ELATIONS } from '../../data-directory';
import { GlobalConstants } from '../../app.component';
import Global = WebAssembly.Global;

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent implements OnInit {
  headerLine1 = 'Small elations';
  headerLine2 = 'Baltimore, Canton, Florence, Coney Island, 2018-2019. ' +
      'The sweetness of an oversaturated summer.';
  imgs = ELATIONS;
  isMobile = GlobalConstants.isMobile;
  constructor() { }

  ngOnInit(): void {
  }

}
