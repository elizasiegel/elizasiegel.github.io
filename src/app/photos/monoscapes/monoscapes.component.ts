import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monoscapes',
  templateUrl: './monoscapes.html',
  styleUrls: ['./monoscapes.css']
})
export class MonoscapesComponent implements OnInit {
  headerLine1 = 'Monoscapes';
  headerLine2 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
