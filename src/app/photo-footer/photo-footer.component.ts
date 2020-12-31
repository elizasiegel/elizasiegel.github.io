import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../app.component';

@Component({
  selector: 'app-photo-footer',
  templateUrl: './photo-footer.component.html',
  styleUrls: ['./photo-footer.component.css']
})
export class PhotoFooterComponent implements OnInit {
  isMobile = GlobalConstants.isMobile;
  constructor() { }

  ngOnInit(): void {
  }

}
