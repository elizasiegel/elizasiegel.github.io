import { Component, OnInit } from '@angular/core';
import { WorkComponent } from "../work/work.component";
import { HOMEWORDS } from "../data-directory";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = HOMEWORDS;

  constructor() { }

  ngOnInit(): void {
  }

}
