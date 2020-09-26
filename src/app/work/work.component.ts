import { Component, OnInit } from '@angular/core';
import { WorkCardComponent } from "./work-card/work-card.component";
import { WORKCARDS } from "../data-directory";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  cards = WORKCARDS;
  headerLine1 = "I write things and also work on a farm.";

  constructor() { }

  ngOnInit(): void {
  }

}
