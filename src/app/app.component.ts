import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eliza Siegel';
  isMobile = (GlobalConstants.screenWidth < 600);
  constructor() {}
}

export class GlobalConstants {
  public static screenWidth: number = window.innerWidth;
  public static isMobile: boolean = (GlobalConstants.screenWidth < 600);
}
