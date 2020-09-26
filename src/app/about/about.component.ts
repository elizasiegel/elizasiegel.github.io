import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  headerLine1 = "Reach me by email at siegel.eliza(at)gmail.com";
  headerLine2 =  " Follow me on Twitter @ElizaSiegel2 or connect with me on LinkedIn.";

  constructor() { }

  ngOnInit(): void {
  }

}
