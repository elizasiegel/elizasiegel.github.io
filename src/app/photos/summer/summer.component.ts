import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent implements OnInit {
  headerLine1 = 'Small elations';
  headerLine2 = 'Baltimore, Canton, Florence, Coney Island, 2018-2019. ' +
      'The sweetness of an oversaturated summer.';
  constructor() { }

  ngOnInit(): void {
  }

}
