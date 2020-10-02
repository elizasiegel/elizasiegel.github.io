import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../data';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {
  @Input() imgs: Photo[];
  isClicked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  enterFullScreen() {
    if (this.isClicked) {
       return {
       };
    }
  }
}
