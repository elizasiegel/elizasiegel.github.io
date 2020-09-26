import { Component, OnInit } from '@angular/core';
import { CONNECTS } from "../data-directory";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  connects = CONNECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
