import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-france-color',
  templateUrl: './france-color.component.html',
  styleUrls: ['./france-color.component.css']
})
export class FranceColorComponent implements OnInit {
  headerLine1 = 'Pale sunset';
  headerLine2 = 'Paris and Étretat, May-June, 2017. A vivid sunburst appearing and vanishing ' +
      'behind purple clouds.';
  constructor() { }

  ngOnInit(): void {
  }

}
