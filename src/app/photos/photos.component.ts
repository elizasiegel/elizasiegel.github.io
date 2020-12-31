import { Component, OnInit } from '@angular/core';
import { PHOTOS } from '../data-directory';
import { GlobalConstants } from '../app.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  headerLine1 = 'Film Photography';
  headerLine2 = '';
  photos = PHOTOS;
  hover: boolean;
  isMobile = GlobalConstants.isMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
