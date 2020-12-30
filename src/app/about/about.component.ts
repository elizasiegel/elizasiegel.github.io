import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstants } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  headerLine1 = 'Reach me by email at siegel.eliza(at)gmail.com';
  headerLine2 =  'Follow me on Twitter @ElizaISiegel or connect with me on LinkedIn.';
  isMobile = GlobalConstants.isMobile;
  constructor() { }

  ngOnInit(): void {
  }

}
